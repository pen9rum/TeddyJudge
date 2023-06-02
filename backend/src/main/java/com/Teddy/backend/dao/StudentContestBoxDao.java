package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Contest;

import com.Teddy.backend.entity.StudentContestBox;

import java.util.Optional;
public interface StudentContestBoxDao {
    Optional<StudentContestBox> findByContestname(String Contestname);
    Optional<StudentContestBox> findByContestnameAndId(String contestname, Long id);
}
