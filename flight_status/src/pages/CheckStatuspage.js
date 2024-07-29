// import React, { useState, useEffect } from 'react';
// import '../assests/Checkpage.css';

// const CheckStatuspage = () => {
//   const [flightNumber, setFlightNumber] = useState('');
//   const [airline, setAirline] = useState('');
//   const [date, setDate] = useState('');
//   const [flightStatus, setFlightStatus] = useState(null);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     setFlightNumber(e.target.value);
//   };

//   const handleAirlineChange = (e) => {
//     setAirline(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleCheckStatus = async () => {
//     setError(null); // Clear previous errors
//     const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';

//     try {
//       if (!flightNumber || !date) {
//         setError('Please provide flight number and date.');
//         return;
//       }
//       // const formattedDate = new Date(date).toISOString().split('T')[0];
//       const response = await fetch(`http://localhost:8080/api/flightstatus/search?flightNumber=${flightNumber}&departureAirport=${airline}&scheduledDepartureTime=${formattedDate}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setFlightStatus(data);
//     } catch (error) {
//       setError(error.message);
//     }
//   };



// //adding this -

//     // const handleCheckStatusDB = async () => {

//     //   setError(null); // Clear previous errors
      

//     //   try {
        
//     //       // Ensure the flightNumber and date are set before making the API call
//     //       if (!flightNumber) {
//     //           setError('Please provide a flight number.');
//     //           return;
//     //       }

//     //       const response = await fetch(`http://localhost:8080/api/flightstatus/flightNumber/${flightNumber}`);
//     //       if (!response.ok) {
//     //           throw new Error(`HTTP error! status: ${response.status}`);
//     //       }
  
//     //       const data = await response.json();
//     //       setFlightStatus(data);
//     //   } catch (error) {
//     //       setError(error.message);
//     //   }
//     // };

// //---------------------------------------------
//   useEffect(() => {
//     if (flightStatus) {
//       console.log(flightStatus);
//     }
//   }, [flightStatus]);

// return (
//     <div className="check-status-page">
//       <h1>Check Flight Status</h1>
//       <div className="form-container">
//        <select value={airline} onChange={handleAirlineChange}>
//   <option value="">Select Airline</option>
//   <option value="AA">American Airlines</option>
//   <option value="DL">Delta Airlines</option>
//   <option value="UA">United Airlines</option>
//   <option value="EY">Etihad</option>
//   <option value="6E">Indigo</option>
//   <option value="SQ">Singapore Airlines</option>
//   <option value="AI">Air India</option>
//   <option value="UK">Vistara</option>
//   <option value="LH">Lufthansa</option>
//   <option value="QP">Akasa</option>
//   <option value="SG">SpiceJet</option>
//   <option value="B6">Jet Blue</option>
//   <option value="AD">Advanced Airlines</option>
//   {/* Add more airlines as needed */}
// </select>

//         <input
//           type="text"
//           placeholder="Flight Number"
//           value={flightNumber}
//           onChange={handleInputChange}
//         />
//         <input
//           type="date"
//           placeholder="Select Date"
//           value={date}
//           onChange={handleDateChange}
//         />
//         <button onClick={handleCheckStatus}>Search</button>
//         {/* <button onClick={handleCheckStatusDB}>Check Flight Status from DB</button> */}
//       </div>

//       {flightStatus && (
//         <div className="flight-status-details">
//           <h2>Flight Status</h2>
//           <p>Flight Number: {flightStatus.flightStatuses[0].flightId}</p>
//           <p>Status: {flightStatus.flightStatuses[0].status}</p>
//           <p>Departure: {flightStatus.flightStatuses[0].operationalTimes.scheduledGateDeparture.dateLocal}</p>
//           <p>Arrival: {flightStatus.flightStatuses[0].operationalTimes.scheduledGateArrival.dateLocal}</p>
//         </div>
//       )}

//       {error && (
//         <div className="error-message">
//           <p>Error: {error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckStatuspage;
// -----------------------------------------------------------------------------------------------------------------------------------------------



import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
// import { FlightTakeoff } from '@material-ui/icons';
// import './App.css';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import '../assests/Checkpage.css';

function CheckStatuspage() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const result = await axios.get('http://localhost:8080/api/flights');
      setFlights(result.data);
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="md" className="App">
      <Typography variant="h3" gutterBottom className="title">
        <FlightTakeoffIcon /> Flight Status Updates
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flight Number</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell>Scheduled Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Gate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow key={flight.id} className={`status-${flight.status.toLowerCase().replace(' ', '-')}`}>
                <TableCell>{flight.flight_number}</TableCell>
                <TableCell>{flight.departure}</TableCell>
                <TableCell>{flight.arrival}</TableCell>
                <TableCell>{new Date(flight.scheduled_time).toLocaleString()}</TableCell>
                <TableCell>{flight.status}</TableCell>
                <TableCell>{flight.gate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="background-plane">✈️</div>
    </Container>
  );
}

export default CheckStatuspage;