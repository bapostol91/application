package com.application.controller;

import com.application.dto.ApplicationDTO;
import com.application.service.ApplicationService;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class ApplicationRestController {
    Logger LOG = Logger.getLogger(ApplicationRestController.class);
    @Resource
    private ApplicationService applicationService;

    @RequestMapping("/applications")
    public List<ApplicationDTO> getApplications() {
        LOG.info("==============> getApplications called!");
        return applicationService.getApplications();
    }
}
