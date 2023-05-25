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
import java.util.List;
import java.util.ArrayList;

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
        entity.setContest(null);
        homeworkDao.save(entity);
        return true;
    }

    public List<HomeworkBO> getAll() {
        List<Homework> homeworks = homeworkDao.findAll();
        List<HomeworkBO> homeworkBOs = new ArrayList<>();

        for (Homework homework : homeworks) {
            HomeworkBO bo = new HomeworkBO();
            // 将所有的 Homework 属性复制到 HomeworkBO
            bo.setHomeworkName(homework.getHomeworkName());
            bo.setTestCase(homework.getTestCase());
            bo.setTestCaseAnswer(homework.getTestCaseAnswer());
            bo.setStartTime(homework.getStartTime());
            bo.setEndTime(homework.getEndTime());
            bo.setAverage(homework.getAverage());
            // Add the URL for the PDF file
            bo.setPdfUrl("/homework/" + homework.getHomeworkName() + "/pdf");
            homeworkBOs.add(bo);
        }
        return homeworkBOs;
    }


    public byte[] getPdf(String homeworkName) {
        Optional<Homework> homework = homeworkDao.findByHomeworkName(homeworkName);
        if (homework.isPresent()) {
            return homework.get().getPDF();
        } else {
            return null;
        }
    }





}
