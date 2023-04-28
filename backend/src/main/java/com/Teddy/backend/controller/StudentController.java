package com.Teddy.backend.controller;

import com.Teddy.backend.model.StudentBO;
import com.Teddy.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/addstudent")
    public ResponseEntity<Void> addStudent(@RequestBody StudentBO studentBo) {
        System.out.println("app");
        if(studentService.add(studentBo)==false)
        {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        System.out.println("apple");
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
