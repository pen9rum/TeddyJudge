package com.Teddy.backend.controller;

import com.Teddy.backend.model. ContestBO;
import com.Teddy.backend.service. ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/course")
public class ContestController {

    @Autowired
    private ContestService contestService;

    @PostMapping("/addcontest")
    public ResponseEntity<Void> addCourse(@RequestBody ContestBO contestBo) {

        if(contestService.add(contestBo)==false)
        {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(HttpStatus.CREATED);
    }



}
