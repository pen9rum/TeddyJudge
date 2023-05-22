package com.Teddy.backend.service;
import com.Teddy.backend.dao.StudentDao;
import com.Teddy.backend.entity.Student;
import com.Teddy.backend.model.StudentBO;
import com.Teddy.backend.model.ValidContributor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.HomeworkDao;
import com.Teddy.backend.entity.Homework;
import com.Teddy.backend.model.HomeworkBO;

import java.util.Date;
import java.util.Optional;

@Service
public class HomeworkService {
    @Autowired
    private HomeworkDao homeworkDao;

    public boolean add(HomeworkBO bo) {

        Homework entity = new Homework();
        entity.setHomeworkName(bo.getHomeworkName());
        entity.setPDF(bo.getPDF()); // PDF is now a byte[]
        entity.setTestCase(bo.getTestCase());
        entity.setTestCaseAnswer(bo.getTestCaseAnswer());
        entity.setStartTime(bo.getStartTime());
        entity.setEndTime(bo.getEndTime());
        entity.setAverage(bo.getAverage());
        System.out.println("hi");
        homeworkDao.save(entity);
        return true;
    }




}
