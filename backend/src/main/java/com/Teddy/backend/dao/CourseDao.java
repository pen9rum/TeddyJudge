package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Contest;
import com.Teddy.backend.entity.Homework;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Course;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseDao  extends CrudRepository<Course, Long>{
    Optional<Course> findByCoursename(String coursename);

    List<Course> findAll();
}
