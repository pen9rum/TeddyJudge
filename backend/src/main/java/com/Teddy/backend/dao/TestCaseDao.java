package com.Teddy.backend.dao;

import com.Teddy.backend.entity.TestCase;
import com.Teddy.backend.entity.Homework;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;
@Repository
public interface TestCaseDao extends CrudRepository<TestCase, Long> {
    Optional<TestCase> findByHomeworkHomeworkNameAndTestCaseIndex(String homeworkName, int testCaseIndex);

    List<TestCase> findAll();

    List<TestCase> findByHomeworkHomeworkName(String homeworkName);

    Optional<TestCase> findByTestCaseAndTestCaseAnswerAndHomeworkHomeworkName(String currentTestCase,String currentTestCaseAnswer, String homeworkName);
    boolean existsByHomework(Homework homework);
}
