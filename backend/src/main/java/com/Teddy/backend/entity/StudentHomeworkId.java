package com.Teddy.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@IdClass(ScoreId.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Score {

    @Id
    private Long id;

    private double score;

    @Id
    @ManyToOne
    @JoinColumn(name = "homework_id")
    private Homework homework;
}
