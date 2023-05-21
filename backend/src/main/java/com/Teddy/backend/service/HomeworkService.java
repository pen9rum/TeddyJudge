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
        entity.setHomeworkname(bo.getHomeworkname());
        entity.setPDF(bo.getPDF());
        entity.setTESTCASE(bo.getTESTCASE());
        entity.setTESTCASEANSWER(bo.getTESTCASEANSWER());
        entity.setStart_time(bo.getStart_time());
        entity.setEnd_time(bo.getEnd_time());
        entity.setAverage(bo.getAverage());
        homeworkDao.save(entity);
        return true;
    }




}
