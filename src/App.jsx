import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ProfileScreen from './ProfileScreen'
import LandingScreen from './LandingScreen'
import "./App.css"
const App = () => {
  return (
    <div className='mainBody'>
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App