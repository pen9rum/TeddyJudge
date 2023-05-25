package com.Teddy.backend.controller;

import com.Teddy.backend.model.CourseBO;
import com.Teddy.backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/course")
public class CourseController {

        @Autowired
        private CourseService courseService;

        @PostMapping("/addcourse")
        public ResponseEntity<Void> addCourse(@RequestBody CourseBO courseBo) {

            if(courseService.add(courseBo)==false)
            {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            return new ResponseEntity<>(HttpStatus.CREATED);
        }



}
