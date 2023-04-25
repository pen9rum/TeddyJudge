package com.Teddy.backend.model;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

@Component
public class JavaCodeExecutor {
    public String compileAndRunJavaCode(String sourceCode) {
        try {
            // 將源代碼寫入文件
            Files.write(Paths.get("TempSolution.java"), sourceCode.getBytes());

            // 編譯 Java 源代碼
            ProcessBuilder compileProcessBuilder = new ProcessBuilder("javac", "TempSolution.java");
            Process compileProcess = compileProcessBuilder.start();
            int compileExitCode = compileProcess.waitFor();

            if (compileExitCode != 0) {
                // 編譯出錯，返回編譯錯誤信息
                return "編譯錯誤：" + new String(compileProcess.getErrorStream().readAllBytes());
            }
            
            // 運行已編譯的 Java 程序
            ProcessBuilder runProcessBuilder = new ProcessBuilder("java", "TempSolution");
            Process runProcess = runProcessBuilder.start();

            // 將需要輸入的數據寫入標準輸入流
            try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(runProcess.getOutputStream(), StandardCharsets.UTF_8))) {
                writer.write("10 40\n");
                writer.flush();
            }

            int runExitCode = runProcess.waitFor();
            String ans = "Please input two numbers(use space to split):1-A\n" +
                    "Gap: 30\n" +
                    "Mul: 400\n" +
                    "Avg: 25.0\n" +
                    "Min: 10\n";

            if (runExitCode == 0) {
                // 成功運行，返回輸出結果
                String output = new String(runProcess.getInputStream().readAllBytes());
                if(output.equals(ans)){
                    System.out.println("Answer right!");
                    return "AC";
                }else{
                    System.out.println("Answer wrong");
                    System.out.println("Your answer is: "+output);
                    System.out.println("But the right answer is: "+ ans);
                    return "WA";
                }

            } else {
                // 運行時錯誤，返回錯誤信息
                return "運行時錯誤：" + new String(runProcess.getErrorStream().readAllBytes());
            }
        } catch (IOException | InterruptedException e) {
            return "錯誤：" + e.getMessage();
        } finally {
            // 清理生成的文件
            new File("TempSolution.java").delete();
            new File("TempSolution.class").delete();
        }
    }
}
