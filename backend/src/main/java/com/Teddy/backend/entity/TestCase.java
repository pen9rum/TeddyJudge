package com.Teddy.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestCase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int testCaseIndex;
    private String testCase;
    private String testCaseAnswer;

    @ManyToOne
    @JoinColumn(name = "homeworkName")
    private Homework homework;
}