// src/components/FlightStatusList.js
import React, { useState, useEffect } from 'react';
import { fetchFlightStatuses } from '../services/api';

const FlightList = () => {
  const [flightStatuses, setFlightStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFlightStatuses = async () => {
      try {
        const data = await fetchFlightStatuses();
        setFlightStatuses(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getFlightStatuses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Flight Statuses</h2>
      <ul>
        {flightStatuses.map(status => (
          <li key={status.id}>
            Flight {status.flightNumber} - {status.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
