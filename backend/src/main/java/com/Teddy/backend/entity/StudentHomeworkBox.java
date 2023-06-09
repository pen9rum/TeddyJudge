package com.Teddy.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@IdClass(StudentHomeworkId.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentHomeworkBox {
    @Id
    private Long id;

    @Id
    private String homeworkName;

    @ElementCollection
    private List<Double> scores;

    private String result;
}
