package com.flightstatus.flightstatus;

import org.springframework.scheduling.annotation.EnableScheduling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableScheduling
@EnableJpaRepositories("com.flightstatus.flightstatus.repository")
@EntityScan("com.flightstatus.flightstatus.model")
public class FlightstatusApplication {
    public static void main(String[] args) {
        SpringApplication.run(FlightstatusApplication.class, args);
    }
}


