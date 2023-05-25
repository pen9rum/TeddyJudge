package com.Teddy.backend.service;
import com.Teddy.backend.dao.ContestDao;
import com.Teddy.backend.entity.Contest;
import com.Teddy.backend.model.ContestBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.ContestDao;
import com.Teddy.backend.entity.Contest;
import com.Teddy.backend.model.ContestBO;
import java.util.Optional;
@Service
public class ContestService {

    @Autowired
    private ContestDao contestDao;

    public boolean add(ContestBO bo) {

        Contest entity = new Contest();
        entity.setContestname(bo.getContestname());
        entity.setTotalscore(bo.getTotalscore());
        entity.setId(bo.getId());
        entity.setHomeworks(bo.getHomeworks());
        contestDao.save(entity);
        return true;
    }
}