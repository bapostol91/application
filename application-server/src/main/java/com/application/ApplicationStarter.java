package com.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class ApplicationStarter {

    public static void main(String[] args) throws Exception {
       SpringApplication.run(ApplicationStarter.class, args);
    }
}


