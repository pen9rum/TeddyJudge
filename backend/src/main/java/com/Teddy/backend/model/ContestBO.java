package com.Teddy.backend.model;

import com.Teddy.backend.entity.Homework;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContestBO {

    private long id;
    private String contestname;
    private int totalscore;
    private int averagescore;
    private List<Homework> homeworks;
    }


