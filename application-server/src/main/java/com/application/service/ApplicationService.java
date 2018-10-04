package com.application.service;

import com.application.dto.Application;
import com.application.jdbc.ApplicationDAO;
import com.application.repository.ApplicationRepository;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicationService {

    @Resource
    private ApplicationDAO applicationDAO;
    @Resource
    private ApplicationRepository applicationRepository;

    public List<Application> getApplications() {
        List<Application> list = new ArrayList<>();
        applicationRepository.findAll().forEach(applicationDTO -> list.add(applicationDTO));
        return list;
    }
}
