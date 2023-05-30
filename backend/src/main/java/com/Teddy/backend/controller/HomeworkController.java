package com.Teddy.backend.controller;

import com.Teddy.backend.model.HomeworkBO;
import com.Teddy.backend.service.HomeworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.util.List;
import java.util.Date;




@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend origin
@RestController
@RequestMapping("/homework")
public class HomeworkController {
    @Autowired
    private HomeworkService homeworkService;

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Void> addHomework(
            @RequestPart("pdfFile") MultipartFile pdfFile,
            @RequestPart("homework") String homeworkJSON) {

        ObjectMapper objectMapper = new ObjectMapper();
        HomeworkBO homeworkBo;
        try {
            homeworkBo = objectMapper.readValue(homeworkJSON, HomeworkBO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            byte[] pdfBytes = pdfFile.getBytes();
            homeworkBo.setPDF(pdfBytes);

            if (homeworkService.add(homeworkBo) == false) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<HomeworkBO>> getAllHomework() {
        return new ResponseEntity<>(homeworkService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{homeworkName}/pdf")
    public ResponseEntity<byte[]> getHomeworkPdf(@PathVariable String homeworkName) {

        byte[] pdfBytes = homeworkService.getPdf(homeworkName);
        if (pdfBytes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "homework.pdf");
            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
        }
    }
    @GetMapping("/{homeworkName}/update/StartTime")
    public ResponseEntity<Void> getStartTime( @RequestParam("dateParam") @DateTimeFormat(pattern="yyyy-MM-dd") Date StartTime,@PathVariable String homeworkName) {
        Boolean date = homeworkService.updateStartTime(StartTime,homeworkName);
        if (date == false) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else
        {
            return new ResponseEntity<>( HttpStatus.OK);
        }
    }


}