package com.Teddy.backend.dao;
import com.Teddy.backend.entity.Contest;

import com.Teddy.backend.entity.StudentHomeworkBox;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface StudentHomeworkBoxDao extends CrudRepository<StudentHomeworkBox, Long> {
    List<StudentHomeworkBox> findByHomeworkName(String homeworkname);
    Optional<StudentHomeworkBox> findByHomeworkNameAndId(String homeworkname, Long id);
}
