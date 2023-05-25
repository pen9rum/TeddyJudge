package com.Teddy.backend.controller;

import com.Teddy.backend.model.TeacherBO;
import com.Teddy.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend origin
@RestController
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;
    @PostMapping("/login")
    public ResponseEntity<Void> teacher_login (@RequestBody TeacherBO teacherBo) {
        if(teacherService.validateLogin(teacherBo))

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
        else
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }


    @PostMapping("/register")
    public ResponseEntity<Void> teacher_register(@RequestBody TeacherBO teacherBo) {
        System.out.println("Hi");
        teacherService.registerTeacher(teacherBo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
