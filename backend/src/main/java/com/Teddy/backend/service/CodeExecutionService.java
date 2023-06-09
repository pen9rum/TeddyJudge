package com.Teddy.backend.service;

import com.Teddy.backend.entity.StudentHomeworkBox;
import com.Teddy.backend.dao.HomeworkDao;
import com.Teddy.backend.dao.StudentHomeworkBoxDao;
import com.Teddy.backend.model.StudentHomeworkBoxBO;
import com.Teddy.backend.model.JavaCodeExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Teddy.backend.model.ExecuteCodeRequest;

import java.util.ArrayList;
import java.util.List;

@Service
public class CodeExecutionService {
    @Autowired
    private JavaCodeExecutor javaCodeExecutor;

    @Autowired
    private HomeworkDao homeworkDao;

    @Autowired
    private StudentHomeworkBoxDao studentHomeworkBoxDao;

    public String compileAndRunJavaCode(ExecuteCodeRequest request) {

        var homeWorkOptional = homeworkDao.findByHomeworkName(request.getHomeworkName());
        var homework = homeWorkOptional.get();
        var testCases = homework.getTestCases();
        List<Double> results = new ArrayList<>();

        var compilerOut = javaCodeExecutor.compileAndRunJavaCode(request.getSourceCode(), request.getId(), testCases, results);


            StudentHomeworkBox studentHomeworkBox = new StudentHomeworkBox();
            studentHomeworkBox.setId(request.getId());
            studentHomeworkBox.setHomeworkName(request.getHomeworkName());
            studentHomeworkBox.setScores(results);
            studentHomeworkBox.setResult(compilerOut);
            studentHomeworkBox.setSourceCode(request.getSourceCode());
            studentHomeworkBoxDao.save(studentHomeworkBox);

        System.out.println(compilerOut);
        return compilerOut;
    }

}
