﻿# Flight_Status_Case_Study
The case study on creating a system to update flight status in Real-time is available in this repository. To provide a smooth user experience for tracking and getting information on aircraft statuses, the project makes use of contemporary web technologies.<br>


The system is designed with the following key components:

Frontend: Developed using React to create a dynamic and interactive user interface. <br>
Backend: Implemented with Spring Boot, a powerful framework in Java, to handle business logic and data processing. <br>
Database: Utilizes MongoDB for efficient and scalable data storage. <br>
Notification Service: Integrates Google Firebase to provide real-time notifications to users. <br>


## Features
User Interaction:

A user-friendly homepage that serves as the main interaction point for users.
Easy navigation to the flight status section.
Real-Time Flight Status:

Displays flights that are in the queue to travel or on hold.
Flight statuses are updated every 3 seconds to ensure users receive the most current information.
Notifications:

Uses Google Firebase to send real-time notifications to users about flight status updates. <br>
Notifications can be received through various channels (e.g., mobile push notifications, emails).

## Technical Details
 ## Frontend
Technology: React <br>
Description: The frontend application is built using React, allowing for a responsive and interactive user interface. The application communicates with the backend to fetch and display real-time flight status data.
 ### Libraries
React: A JavaScript library for building user interfaces. <br>
React Router: For handling navigation within the application. <br>
Axios: For making HTTP requests from the frontend to the backend. <br>
Material-UI: For a consistent and responsive user interface design. <br>
Firebase: For push notifications to users.

 ## Backend
Technology: Spring Boot (Java)
Description: The backend is developed with Spring Boot, a robust framework for building enterprise-grade applications. It handles the business logic, processes data from the database, and serves the frontend with necessary APIs.
  ### Dependencies
Spring Boot: A Java-based framework used to create stand-alone, production-grade Spring-based applications. <br>
Spring Data JPA: For database interactions and ORM. <br>
Spring Web: For building web applications, including RESTful services. <br>
Spring Boot Starter Validation: For input validation. <br>
MongoDB: As the database for storing flight information. <br>
Firebase Admin SDK: For integrating Firebase services into the backend. <br>

 ## Database
   ## Technology: MongoDB
Description: MongoDB is used for its flexibility and scalability, making it an ideal choice for handling the varying volumes of flight status data. <br>
Notifications Technology: Google Firebase <br>
Description: Firebase is integrated to provide real-time notifications. It ensures that users are promptly informed of any changes in flight statuses through various notification channels. <br>


  ## Project Structure
The project is organized into the following directories:

Frontend:
Contains the React application for the user interface. <br>
Main interaction point is the Homepage, which links to the FlightStatus section. <br>

Backend:
Spring Boot application handling API requests, business logic, and database interactions. <br>
Key directories include:
src/main/java: Contains Java source files.
src/main/resources: Configuration files, including application.properties.

Database:
MongoDB setup and configurations for storing flight status data.
Notifications:

Firebase configuration files and logic for sending notifications.
Getting Started

  ## Dependencies
  
### React
react <br>
react-dom <br>
react-router-dom <br>
axios <br>
@material-ui/core <br>
firebase <br>
### Spring Boot
spring-boot-starter-data-jpa <br>
spring-boot-starter-web <br>
spring-boot-starter-validation <br>
mongodb-driver-sync <br>
firebase-admin <br>



## Prerequisites

To set up the project locally, follow these steps:

Node.js and npm installed for the frontend. <br>
Java Development Kit (JDK) and Maven for the backend. <br>
MongoDB installed and running. <br>
Firebase account for notification service. <br>

 ## Installation
```
// Clone the Repository:
sh
Copy code
git clone https://github.com/Tusharkumar9900/FlightStatus_CaseStudy.git
cd FlightStatus_CaseStudy
``` 


## Frontend Setup:

```
sh
Copy code
cd frontend
npm install
npm start
```

 ## Backend Setup:
 ```
sh
Copy code
cd backend
mvn clean install
mvn spring-boot:run
```

 ## Database Setup:

Ensure MongoDB is running and configured properly.

 ## Firebase Setup:

Add your Firebase service account key to the backend resources and configure the Firebase settings.
