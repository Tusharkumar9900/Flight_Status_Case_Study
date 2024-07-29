package com.flightstatus.flightstatus.controller;

import com.flightstatus.flightstatus.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/send")
    public void sendNotification(@RequestParam String topic, @RequestParam String title, @RequestParam String body) {
        notificationService.sendNotification(topic, title, body);
    }
}

