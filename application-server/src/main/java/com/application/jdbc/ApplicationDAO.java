package com.application.jdbc;

import com.application.dto.ApplicationDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
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


    public List<ApplicationDTO> getApplications() {
        jdbcTemplate = new JdbcTemplate(dataSource);
        String selectQuery = "SELECT id, name FROM \"Application\"";
        return jdbcTemplate.query(selectQuery, new RowMapper<ApplicationDTO>() {
            public ApplicationDTO mapRow(ResultSet resultSet, int i) throws SQLException {
                ApplicationDTO applicationDTO = new ApplicationDTO();
                applicationDTO.setId(resultSet.getInt("id"));
                applicationDTO.setName(resultSet.getString("name"));
                return applicationDTO;
            }
        });
    }
}
