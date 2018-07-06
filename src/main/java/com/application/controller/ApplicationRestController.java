package com.application.controller;

import com.application.dto.ApplicationDTO;
import com.application.service.ApplicationService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class ApplicationRestController {

    @Resource
    private ApplicationService applicationService;

    @RequestMapping("/applications")
    public List<ApplicationDTO> getApplications() {
        return applicationService.getApplications();
    }
}
