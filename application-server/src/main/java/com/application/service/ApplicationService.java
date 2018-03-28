package com.application.service;

import com.application.dto.ApplicationDTO;
import com.application.jdbc.ApplicationDAO;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ApplicationService {

    @Resource
    private ApplicationDAO applicationDAO;

    public List<ApplicationDTO> getApplications() {
        return applicationDAO.getApplications();
    }
}
