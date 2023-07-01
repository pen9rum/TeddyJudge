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
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private String testCase;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private String testCaseAnswer;

    @ManyToOne
    @JoinColumn(name = "homeworkName")
    private Homework homework;
}
