package com.Teddy.backend.service;

import com.Teddy.backend.model.ValidContributor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.StudentDao;
import com.Teddy.backend.entity.Student;
import com.Teddy.backend.model.StudentBO;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentDao studentDao;

    @Autowired
    private ValidContributor validContributor;

    public boolean add(StudentBO bo) {
        if (validContributor.isStudentValidId(bo.getId()) == false) {
            return false;
        }
        Student entity = new Student();
        entity.setId(bo.getId());
        entity.setPassword(bo.getPassword());
        studentDao.save(entity);
        return true;
    }

    public boolean validateLogin(Long id, String password) {
        Optional<Student> studentOptional = studentDao.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            return student.getPassword().equals(password);
        }
        return false;
    }
}

