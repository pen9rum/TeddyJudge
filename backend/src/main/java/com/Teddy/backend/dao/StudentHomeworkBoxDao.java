package com.Teddy.backend.dao;
import com.Teddy.backend.entity.Contest;

import com.Teddy.backend.entity.StudentHomeworkBox;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface StudentHomeworkBoxDao extends CrudRepository<StudentHomeworkBox, Long> {
    Optional<StudentHomeworkBox> findByHomeworkname(String homeworkname);
    Optional<StudentHomeworkBox> findByHomeworknameAndId(String homeworkname, Long id);
}
