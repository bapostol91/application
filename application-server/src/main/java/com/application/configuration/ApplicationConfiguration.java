package com.application.configuration;

import org.postgresql.ds.PGPoolingDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.sql.DataSource;


@Configuration
@PropertySource("classpath:application.properties")
public class ApplicationConfiguration {

    @Value("${jdbc.host}")
    private String hostname;
    @Value("${jdbc.user}")
    private String user;
    @Value("${jdbc.password}")
    private String password;
    @Value("${jdbc.port}")
    private Integer port;
    @Value("${jdbc.database}")
    private String database;
    @Value("${jdbc.schema}")
    private String schema;

    @Bean
    public DataSource dataSource() {
        PGPoolingDataSource pgPoolingDataSource = new PGPoolingDataSource();

        pgPoolingDataSource.setServerName(hostname);
        pgPoolingDataSource.setDatabaseName(database);
        pgPoolingDataSource.setUser(user);
        pgPoolingDataSource.setPassword(password);
        pgPoolingDataSource.setPortNumber(port);
        pgPoolingDataSource.setCurrentSchema(schema);
        pgPoolingDataSource.setSslMode("require");
        return pgPoolingDataSource;

    }


}
