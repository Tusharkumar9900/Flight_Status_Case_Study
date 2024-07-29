import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/Homepage.css';
import flightstatusimage from '../assests/images/flightstatus.png';
const HomePage = () => {
  // console.log('HomePage rendered');
  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="logo">
            <div> <img src = {flightstatusimage} alt ='Flight Status' width="45" height="40"/></div>
           <div>
            <span class="flight-status-text">Flight Status</span>
            </div>
          </div>
          {/* <div className="nav-links">
            <Link to="/login" className="login-button">Login</Link>
          </div> */}
           <div className="nav-links">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/check-status" className="check-status-button">Check Status</Link>
          </div>
        </nav>
      </header>
      <main>
        <h1>Hi there, where would you like to go today?</h1>
        <div className="booking-section">
          <div className="booking-options">
            <button>One Way</button>
            <button>Round Trip</button>
            <button>Multi City</button>
          </div>
          <div className="booking-form">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Departure" />
            <input type="date" placeholder="Return" />
            <input type="number" placeholder="Passengers" min="1" />
            <button className="search-button">Search Flights</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;


