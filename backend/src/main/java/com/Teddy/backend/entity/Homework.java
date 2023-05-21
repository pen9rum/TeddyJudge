package com.Teddy.backend.entity;
import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Homework {
    @Id// table id place
    private String homeworkname;
    private String PDF;
    private String TESTCASE;
    private String TESTCASEANSWER;
    private Date start_time;
    private Date end_time;
    private float average;



}
