package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Homework;
import com.Teddy.backend.entity.Student;
import com.Teddy.backend.entity.StyleCheck;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface StyleCheckDao extends CrudRepository<StyleCheck, Long> {

    List<StyleCheck> findByHomework(Homework homework);
}
