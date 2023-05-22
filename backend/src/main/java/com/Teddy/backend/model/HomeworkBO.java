package com.Teddy.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HomeworkBO {
    private String homeworkName;
    private byte[] PDF;
    private String testCase;
    private String testCaseAnswer;
    private Date startTime;
    private Date endTime;
    private float average;
}
