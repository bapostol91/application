package com.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.application.dto.Application;

@Repository
@Transactional
public interface ApplicationRepository extends CrudRepository<Application, Long> {

}
