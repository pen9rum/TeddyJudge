package com.Teddy.backend.entity;

import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Teacher {
    @Id// 放到SQL內
    private String id;
    private String password;
    private String color;

}