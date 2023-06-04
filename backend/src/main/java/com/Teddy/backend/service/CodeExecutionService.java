package com.Teddy.backend.service;
import com.Teddy.backend.model.JavaCodeExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CodeExecutionService {
    @Autowired
    private JavaCodeExecutor javaCodeExecutor;
    public String compileAndRunJavaCode(String sourceCode) {
        return javaCodeExecutor.compileAndRunJavaCode(sourceCode);
    }

    //studenthomeworkboxDAO 這個是甚麼?
}
