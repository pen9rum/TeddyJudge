package com.Teddy.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Homework;

import java.util.Optional;

@Repository
public interface HomeworkDao extends CrudRepository<Homework, Long>{
    Optional<Homework> findByHomeworkName(String homeworkname);
}
