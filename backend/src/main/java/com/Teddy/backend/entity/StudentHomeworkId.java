package com.Teddy.backend.entity;

import java.io.Serializable;
import java.util.Objects;

public class StudentHomeworkId implements Serializable {

    private Long id;
    private String homeworkName;

    public StudentHomeworkId() {
    }

    public StudentHomeworkId(Long id, String homeworkName) {
        this.id = id;
        this.homeworkName = homeworkName;
    }

    public Long getId() {
        return id;
    }

    public String getHomeworkName() {
        return homeworkName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof StudentHomeworkId)) return false;
        StudentHomeworkId that = (StudentHomeworkId) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(homeworkName, that.homeworkName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, homeworkName);
    }
}
