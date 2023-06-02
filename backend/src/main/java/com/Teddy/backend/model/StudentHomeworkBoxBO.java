package com.Teddy.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentHomeworkBoxBO {
    private int semester;
    private int year;
    private String homeworkname;
    private long id;
    private boolean pass;
    private double score;
}
