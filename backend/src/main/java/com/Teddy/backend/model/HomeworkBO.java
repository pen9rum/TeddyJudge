package com.Teddy.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor


public class HomeworkBO {
    private String homeworkname;
    private String PDF;
    private String TESTCASE;
    private String TESTCASEANSWER;
    private Date start_time;
    private Date end_time;
    private float average;

}
