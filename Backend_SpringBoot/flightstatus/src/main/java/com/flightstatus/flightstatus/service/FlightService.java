package com.flightstatus.flightstatus.service;

import com.flightstatus.flightstatus.model.Flight;
import com.flightstatus.flightstatus.repository.FlightRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class FlightService {
    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public void updateFlightStatus(Long flightId, String status) {
        Flight flight = flightRepository.findById(flightId).orElseThrow(() -> new RuntimeException("Flight not found"));
        flight.setStatus(status);
        flightRepository.save(flight);
    }
}
