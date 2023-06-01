package com.Teddy.backend.dao;

import com.Teddy.backend.entity.Homework;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Contest;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContestDao  extends CrudRepository<Contest, Long>{
    Optional<Contest> findByContestname(String contestname);

    List<Contest> findAll();
}
