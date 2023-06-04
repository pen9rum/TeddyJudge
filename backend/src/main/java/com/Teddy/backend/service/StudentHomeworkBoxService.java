package com.Teddy.backend.service;

import com.Teddy.backend.entity.Course;
import com.Teddy.backend.entity.StudentContestBox;
import com.Teddy.backend.model.ValidContributor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.StudentHomeworkBoxDao;
import com.Teddy.backend.entity.StudentHomeworkBox;
import com.Teddy.backend.model.StudentHomeworkBoxBO;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

@Service
public class StudentHomeworkBoxService {

    @Autowired
    private StudentHomeworkBoxDao studenthomeworkboxDao;


    public boolean add(StudentHomeworkBoxBO bo) {
        StudentHomeworkBox entity = new StudentHomeworkBox();
        entity.setHomeworkname(bo.getHomeworkname());
        entity.setId(bo.getId()); // PDF is now a byte[]
        studenthomeworkboxDao.save(entity);
        return true;
    }

    public double getHomeworkScoreByID(StudentHomeworkBoxBO bo) {
        Optional<StudentHomeworkBox> studenthomeworkbox = studenthomeworkboxDao. findByHomeworknameAndId(bo.getHomeworkname(),bo.getId());
        if(studenthomeworkbox.isPresent()) {
            return studenthomeworkbox.get().getScore();
        }
        else
            return 0.00;
    }

}