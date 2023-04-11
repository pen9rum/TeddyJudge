package com.Teddy.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Student;

@Repository
public interface StudentDao extends CrudRepository<Student, Long>{

}