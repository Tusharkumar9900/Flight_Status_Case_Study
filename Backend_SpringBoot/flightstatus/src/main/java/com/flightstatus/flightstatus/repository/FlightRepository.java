package com.flightstatus.flightstatus.repository;
import  com.flightstatus.flightstatus.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories(basePackages = {"com.flightstatus.flightstatus.repository"})
public interface FlightRepository extends JpaRepository<Flight, Long> {
}
