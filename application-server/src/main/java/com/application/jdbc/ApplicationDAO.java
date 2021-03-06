package com.application.jdbc;

import com.application.dto.Application;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ApplicationDAO {

    @Resource
    private DataSource dataSource;

    private JdbcTemplate jdbcTemplate;


    public List<Application> getApplications() {
        jdbcTemplate = new JdbcTemplate(dataSource);
        String selectQuery = "SELECT \"ID\", \"NAME\" FROM public.\"Application\"";
        return jdbcTemplate.query(selectQuery, new RowMapper<Application>() {
            public Application mapRow(ResultSet resultSet, int i) throws SQLException {
                Application applicationDTO = new Application();
                applicationDTO.setId(resultSet.getInt("ID"));
                applicationDTO.setName(resultSet.getString("NAME"));
                return applicationDTO;
            }
        });
    }
}
