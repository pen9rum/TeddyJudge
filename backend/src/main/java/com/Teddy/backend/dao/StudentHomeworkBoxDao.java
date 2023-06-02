package com.Teddy.backend.dao;
import com.Teddy.backend.entity.Contest;

import com.Teddy.backend.entity.StudentHomeworkBox;

import java.util.Optional;

public interface StudentHomeworkBoxDao {
    Optional<StudentHomeworkBox> findByHomeworkname(String homeworkname);
    Optional<StudentHomeworkBox> findByHomeworknameAndId(String homeworkname, Long id);
}
