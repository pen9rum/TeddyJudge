package com.Teddy.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Homework {
    @Id
    private String homeworkName;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] PDF;
    private Date startTime;
    private Date endTime;
    private float average;

    @OneToMany(mappedBy = "homework", cascade = CascadeType.ALL)
    private List<TestCase> testCases;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", nullable = true)
    private Contest contest;

    @OneToMany(mappedBy = "homework", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    private List<StyleCheck> styleChecks;

    @OneToMany(mappedBy = "homework", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = false)
    private List<StyleCheckResult> styleCheckResult;
}
