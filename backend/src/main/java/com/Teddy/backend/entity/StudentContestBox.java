package com.Teddy.backend.entity;
import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentContestBox {

    private String contestname;
    @Id
    private long id;
    private double totalscore;
    private List<Double> questionscore;

}
