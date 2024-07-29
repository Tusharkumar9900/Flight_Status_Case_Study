import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';
import Bookingpage from '../pages/Bookingpage';
import FlightDetailspage from '../pages/FlightDetailspage';
import NotificationSettingspage from '../pages/NotificationSettingspage';
import Ticketpage from '../pages/Ticketpage';
import CheckStatuspage from '../pages/CheckStatuspage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/book-flight" element={<Bookingpage />} />
        <Route path="/flight-details/:id" element={<FlightDetailspage />} />
        <Route path="/notifications" element={<NotificationSettingspage />} />
        <Route path="/ticket/:id" element={<Ticketpage />} />
        <Route path="/check-status" element={<CheckStatuspage/>} />
      </Routes>
    </Router>
  );
};

export default App;

