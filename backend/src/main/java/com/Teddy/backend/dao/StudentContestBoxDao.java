package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Contest;

import com.Teddy.backend.entity.Homework;
import com.Teddy.backend.entity.StudentContestBox;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
public interface StudentContestBoxDao extends CrudRepository<StudentContestBox, Long> {
    Optional<StudentContestBox> findByContestname(String Contestname);
    Optional<StudentContestBox> findByContestnameAndId(String contestname, Long id);
}
