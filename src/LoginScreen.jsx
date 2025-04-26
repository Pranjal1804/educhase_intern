import React, { useState } from 'react';
import './LoginScreen.css';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Signin to your <br />PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, <br />   consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="login-form-input"
              required
            />
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="login-form-input"
              required
            />
          </div>
          
          <Link 
          to="/profile"
            type="submit"
            className="login-btn login-btn-gray"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;