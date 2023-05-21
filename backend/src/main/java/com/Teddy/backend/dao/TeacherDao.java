package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Teacher;

import java.util.Optional;

@Repository
public interface TeacherDao extends CrudRepository<Teacher, Long>{
    Optional<Teacher> findById(String  id);

}