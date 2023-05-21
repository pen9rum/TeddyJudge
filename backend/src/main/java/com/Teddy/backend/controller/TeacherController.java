package com.Teddy.backend.controller;

import com.Teddy.backend.model.TeacherBO;
import com.Teddy.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
