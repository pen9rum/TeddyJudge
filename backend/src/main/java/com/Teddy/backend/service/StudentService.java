package com.Teddy.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.StudentDao;
import com.Teddy.backend.entity.Student;
import com.Teddy.backend.model.StudentBO;

@Service
public class StudentService {

    @Autowired
    private StudentDao studentDao;
    private ValidContributor validContributor;

    public boolean add(StudentBO bo) {
        if (validContributor.IsStudentValidId(bo.getId()) == false) {
            return false;
        }
        Student entity = new Student();
        entity.setId(bo.getId());
        entity.setPassword(bo.getPassword());
        studentDao.save(entity);
        return true;
    }
}

