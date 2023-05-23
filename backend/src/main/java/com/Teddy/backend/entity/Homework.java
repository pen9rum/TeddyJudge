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
    private String homeworkName;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] PDF;
    private String testCase;
    private String testCaseAnswer;
    private Date startTime;
    private Date endTime;
    private float average;



}
