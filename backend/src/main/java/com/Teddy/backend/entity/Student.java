package com.Teddy.backend.entity;

import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id// 放到SQL內
    private Long id;
    private String password;

    private String name;
    private String color;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "student")
    private List<StyleCheckResult> styleCheckResults;
}