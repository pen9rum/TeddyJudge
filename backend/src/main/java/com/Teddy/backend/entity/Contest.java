package com.Teddy.backend.entity;
import lombok.AllArgsConstructor;//把GET SET審略
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import jakarta.persistence.*;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String contestname;
    private int totalscore;

    private Date startTime;
    private Date endTime;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "contest")
    private List<Homework> homeworks;

}
