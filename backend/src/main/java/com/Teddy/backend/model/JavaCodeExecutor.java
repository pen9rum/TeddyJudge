package com.Teddy.backend.model;
import com.Teddy.backend.entity.TestCase;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Component
public class JavaCodeExecutor {

    public String compileAndRunJavaCode(String sourceCode, Long id, List<TestCase> testCases, List<Double> results) {
        try {
            Files.write(Paths.get("Main.java"), sourceCode.getBytes());

            ProcessBuilder compileProcessBuilder = new ProcessBuilder("javac", "Main.java");
            Process compileProcess = compileProcessBuilder.start();
            int compileExitCode = compileProcess.waitFor();

            if (compileExitCode != 0) {
                return "編譯錯誤：" + new String(compileProcess.getErrorStream().readAllBytes());
            }

            int totalScore = 0;
            int scorePerCase = 100 / testCases.size();

            for (TestCase testCase : testCases) {
                String input = testCase.getTestCase();
                String expectedOutput = testCase.getTestCaseAnswer();

                ProcessBuilder runProcessBuilder = new ProcessBuilder("java", "Main");
                Process runProcess = runProcessBuilder.start();

                try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(runProcess.getOutputStream(), StandardCharsets.UTF_8))) {
                    writer.write(input + "\n");
                    writer.flush();
                }

                int runExitCode = runProcess.waitFor();

                if (runExitCode == 0) {
                    String actualOutput = new String(runProcess.getInputStream().readAllBytes()).trim();
                    System.out.println(actualOutput);
                    System.out.println(expectedOutput);
                    if (actualOutput.equals(expectedOutput)) {
                        totalScore += scorePerCase;
                        results.add((double) scorePerCase);
                    }
                } else {
                    return "運行時錯誤：" + new String(runProcess.getErrorStream().readAllBytes());
                }



            }

            return "最終得分：" + totalScore;

        } catch (IOException | InterruptedException e) {
            return "錯誤：" + e.getMessage();
        } finally {
            new File("Main.java").delete();
            new File("Main.class").delete();
        }
    }
}

