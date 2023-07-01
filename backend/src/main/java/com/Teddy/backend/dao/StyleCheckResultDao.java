package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Homework;
import com.Teddy.backend.entity.Student;
import com.Teddy.backend.entity.StyleCheckResult;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface StyleCheckResultDao extends CrudRepository<StyleCheckResult, Long> {
    Optional<StyleCheckResult> findByHomeworkAndStudentAndId(Homework homework, Student student, Long id);

    List<StyleCheckResult> findByHomeworkAndStudent(Homework homework, Student student);
}