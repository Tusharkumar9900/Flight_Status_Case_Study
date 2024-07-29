package com.flightstatus.flightstatus.controller;

import com.flightstatus.flightstatus.model.Flight;
import com.flightstatus.flightstatus.service.FlightService;
import com.flightstatus.flightstatus.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/flights")
    public List<Flight> getAllFlights() {
        return flightService.getAllFlights();
    }

    @PostMapping("/update-flight")
    public void updateFlightStatus(@RequestBody UpdateFlightRequest request) {
        flightService.updateFlightStatus(request.getFlightId(), request.getStatus());
        notificationService.sendNotification("flight-" + request.getFlightId(), "Flight Status Update", "Flight " + request.getFlightId() + " status changed to " + request.getStatus());
    }

    static class UpdateFlightRequest {
        private Long flightId;
        private String status;

        
        // Getters and setters
        // ...
        
        public Long getFlightId() {
            return flightId;
        }
        public void setFlightId(Long flightId) {
            this.flightId = flightId;
        }
        public String getStatus() {
            return status;
        }
        public void setStatus(String status) {
            this.status = status;
        }

    }
}
