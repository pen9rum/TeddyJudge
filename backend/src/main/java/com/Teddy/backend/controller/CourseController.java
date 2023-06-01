package com.Teddy.backend.controller;

import com.Teddy.backend.model.CourseBO;
import com.Teddy.backend.model.HomeworkBO;
import com.Teddy.backend.service.CourseService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/course")
public class CourseController {

        @Autowired
        private CourseService courseService;

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Void> addCourse(
            @RequestPart("pdfFile") MultipartFile pdfFile,
            @RequestPart("course") String courseJSON) {

        System.out.println("Course Hi");
        ObjectMapper objectMapper = new ObjectMapper();
        CourseBO courseBo;
        try {
            courseBo = objectMapper.readValue(courseJSON, CourseBO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            byte[] pdfBytes = pdfFile.getBytes();
            courseBo.setPDF(pdfBytes);

            if (courseService.add(courseBo) == false) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




}
