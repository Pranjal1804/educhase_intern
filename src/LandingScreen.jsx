import React from 'react';
import './LandingScreen.css';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <div className="txtCnt">

        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>
        
        <Link to="/signup" className="landing-btn landing-btn-primary">
          Create Account
        </Link>
        
        <Link to="/login" className="landing-btn landing-btn-secondary">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;