package com.Teddy.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HomeworkBO {
    private String homeworkName;
    private byte[] PDF;
    private List<String> testCase;
    private List<String> testCaseAnswer;
    private Date startTime;
    private Date endTime;
    private float average;
    private String pdfUrl;

    private boolean contestOrNot;
}
