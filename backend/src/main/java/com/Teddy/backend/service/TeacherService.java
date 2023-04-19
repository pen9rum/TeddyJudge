package com.Teddy.backend.service;

import com.Teddy.backend.model.ValidContributor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.TeacherDao;
import com.Teddy.backend.entity.Teacher;
import com.Teddy.backend.model.TeacherBO;

@Service
public class TeacherService {

    @Autowired
    private TeacherDao teacherDao;
    @Autowired
    private ValidContributor validContributor;

    public boolean add(TeacherBO bo) {
        if (validContributor.isTeacherValidId(bo.getId()) == false) {
            return false;
        }
        Teacher entity = new Teacher();
        entity.setId(bo.getId());
        entity.setPassword(bo.getPassword());
        teacherDao.save(entity);
        return true;
    }
}

