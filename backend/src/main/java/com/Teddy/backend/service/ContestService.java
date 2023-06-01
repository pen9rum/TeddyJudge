package com.Teddy.backend.service;
import com.Teddy.backend.dao.ContestDao;
import com.Teddy.backend.dao.HomeworkDao;
import com.Teddy.backend.entity.Contest;
import com.Teddy.backend.entity.Homework;
import com.Teddy.backend.model.ContestBO;
import com.Teddy.backend.model.HomeworkBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.ContestDao;
import com.Teddy.backend.entity.Contest;
import com.Teddy.backend.model.ContestBO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class ContestService {

    @Autowired
    private ContestDao contestDao;

    @Autowired
    private HomeworkDao homeworkDao;

    public boolean add(ContestBO bo) {
        Contest entity = new Contest();
        entity.setContestname(bo.getContestname());
        entity.setTotalscore(bo.getTotalscore());
        entity.setId(bo.getId());
        entity.setStartTime(bo.getStartTime());
        entity.setEndTime(bo.getEndTime());
        contestDao.save(entity);

        List<Homework> homeworks = new ArrayList<>();
        for (HomeworkBO homeworkBO : bo.getHomeworks()) {
            Homework homework = new Homework();
            homework.setHomeworkName(homeworkBO.getHomeworkName());
            homework.setPDF(homeworkBO.getPDF()); // PDF is now a byte[]
            homework.setTestCase(homeworkBO.getTestCase());
            homework.setTestCaseAnswer(homeworkBO.getTestCaseAnswer());
            homework.setStartTime(homeworkBO.getStartTime());
            homework.setEndTime(homeworkBO.getEndTime());
            homework.setAverage(homeworkBO.getAverage());
            homework.setContest(entity);
            homeworks.add(homework);

            // save the homework
            homeworkDao.save(homework);
        }

        entity.setHomeworks(homeworks);

        contestDao.save(entity);
        return true;
    }

}