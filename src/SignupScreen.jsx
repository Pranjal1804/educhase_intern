import React, { useState } from 'react';
import './SignupScreen.css';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true
  });
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData({
        ...formData,
        isAgency: name === 'agency-yes'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup with:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create your PopX account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label htmlFor="fullName" className="signup-form-label">
              Full Name<span className="signup-required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="signup-form-input"
              required
            />
          </div>
          
          <div className="signup-form-group">
            <label htmlFor="phoneNumber" className="signup-form-label">
              Phone number<span className="signup-required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="signup-form-input"
              required
            />
          </div>
          
          <div className="signup-form-group">
            <label htmlFor="email" className="signup-form-label">
              Email address<span className="signup-required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="signup-form-input"
              required
            />
          </div>
          
          <div className="signup-form-group">
            <label htmlFor="password" className="signup-form-label">
              Password<span className="signup-required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="signup-form-input"
              required
            />
          </div>
          
          <div className="signup-form-group">
            <label htmlFor="companyName" className="signup-form-label">
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="signup-form-input"
            />
          </div>
          
          <div className="signup-form-group">
            <p className="signup-form-label">
              Are you an Agency?<span className="signup-required">*</span>
            </p>
            <div className="signup-radio-group">
              <div className="signup-radio-option">
                <input
                  type="radio"
                  id="agency-yes"
                  name="agency-yes"
                  checked={formData.isAgency}
                  onChange={handleChange}
                  className="signup-radio-input"
                />
                <label htmlFor="agency-yes" className="signup-radio-label">Yes</label>
              </div>
              <div className="signup-radio-option">
                <input
                  type="radio"
                  id="agency-no"
                  name="agency-no"
                  checked={!formData.isAgency}
                  onChange={handleChange}
                  className="signup-radio-input"
                />
                <label htmlFor="agency-no" className="signup-radio-label">No</label>
              </div>
            </div>
          </div>
          
          <Link 
          to="/profile"
            type="submit"
            className="signup-btn signup-btn-primary"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;