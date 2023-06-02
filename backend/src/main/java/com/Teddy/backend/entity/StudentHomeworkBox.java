package com.Teddy.backend.entity;
import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentHomeworkBox {
    private int semester;
    private int year;
    private String homeworkname;
    @Id
    private long id;
    private boolean pass;
    private double score;


}
