// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/flightstatus'; // Spring Boot API URL

export const fetchFlightStatuses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching flight statuses:', error);
    throw error;
  }
};
