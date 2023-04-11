package com.Teddy.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Teacher;

@Repository
public interface TeacherDao extends CrudRepository<Teacher, Long>{

}