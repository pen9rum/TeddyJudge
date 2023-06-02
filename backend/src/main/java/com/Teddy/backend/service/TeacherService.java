package com.Teddy.backend.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean validateLogin(TeacherBO teacherbo) {
        Optional<Teacher> teacherOptional = teacherDao.findById(teacherbo.getId());
        if (teacherOptional.isPresent()) {
            Teacher teacher = teacherOptional.get();
            // Use the password encoder to check if the raw password matches the hashed one
            return bCryptPasswordEncoder.matches(teacherbo.getPassword(), teacher.getPassword());
        }
        return false;
    }

    public void registerTeacher(TeacherBO teacherbo) {
        teacherbo.setPassword(bCryptPasswordEncoder.encode(teacherbo.getPassword()));
        Teacher teacher = new Teacher();
        teacher.setId(teacherbo.getId());
        teacher.setPassword(teacherbo.getPassword());
        teacher.setColor(teacherbo.getColor());
        teacherDao.save(teacher);
    }

        public void updateTeacher(TeacherBO teacherbo) {
        teacherbo.setPassword(bCryptPasswordEncoder.encode(teacherbo.getPassword()));
        Optional<Teacher> teacherOptional = teacherDao.findById(teacherbo.getId());
        if (teacherOptional.isPresent()) {
            Teacher teacher = teacherOptional.get();
            teacher.setPassword(teacherbo.getPassword());
            teacher.setColor(teacherbo.getColor());
            teacherDao.save(teacher);
        } else {
            // Throw an exception or handle the situation where the teacher with the given ID does not exist
        }
    }


}

