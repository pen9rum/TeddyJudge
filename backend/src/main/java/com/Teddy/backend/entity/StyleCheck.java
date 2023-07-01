package com.Teddy.backend.entity;


import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StyleCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "homeworkName", nullable = false)
    private Homework homework;

    @Lob
    private String functionName;
    @Lob
    private String functionType;
}
