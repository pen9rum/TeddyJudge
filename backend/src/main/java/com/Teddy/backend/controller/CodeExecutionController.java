package com.Teddy.backend.controller;
import com.Teddy.backend.service.CodeExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/code")
public class CodeExecutionController {
    @Autowired
    private CodeExecutionService codeExecutionService;

    @PostMapping("/execute")
    public String executeCode(@RequestBody String sourceCode) {
        return codeExecutionService.compileAndRunJavaCode(sourceCode);
    }


}
