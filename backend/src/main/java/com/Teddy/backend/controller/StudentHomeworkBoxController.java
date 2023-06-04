package com.Teddy.backend.controller;

import com.Teddy.backend.entity.StudentHomeworkBox;
import com.Teddy.backend.model.StudentContestBoxBO;
import com.Teddy.backend.model.StudentHomeworkBoxBO;
import com.Teddy.backend.service.StudentHomeworkBoxService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student_homework")
public class StudentHomeworkBoxController {

    @Autowired
    private StudentHomeworkBoxService studentHomeworkBoxService;

    @PostMapping("/add_student_homework")
    public ResponseEntity<Void> addStudentHomeworkBox(@RequestBody StudentHomeworkBoxBO studentBo) {
        if(studentHomeworkBoxService.add(studentBo)==false)
        {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/get_score_by_Id")
    public ResponseEntity<Double> getScoreById(@RequestBody StudentHomeworkBoxBO studentBo) {
        return  ResponseEntity.ok(studentHomeworkBoxService.getHomeworkScoreByID(studentBo));

    }


}

