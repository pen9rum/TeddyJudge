package com.Teddy.backend.service;

import com.Teddy.backend.entity.Student;
import com.Teddy.backend.model.ValidContributor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.TeacherDao;
import com.Teddy.backend.entity.Teacher;
import com.Teddy.backend.model.TeacherBO;

import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherDao teacherDao;



    public boolean validateLogin(TeacherBO teacherbo) {
        Optional<Teacher> teacherOptional = teacherDao.findById(teacherbo.getId());
        if (teacherOptional.isPresent()) {
            Teacher teacher = teacherOptional.get();
            return teacher.getPassword().equals(teacherbo.getPassword());
        }
        return false;
    }
}

