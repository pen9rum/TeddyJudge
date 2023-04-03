package com.Teddy.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Teddy.backend.entity.Customer;

@Repository
public interface CustomerDao extends CrudRepository<Customer, Long>{

}