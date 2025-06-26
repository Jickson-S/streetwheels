import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';  // Import Navbar
import HomePage from './pages/HomePage';
import CarRentalPage from './pages/CarRentalPage';
import SelfDrivingCarPage from './pages/SelfDrivingCarPage';
import ActingDriverPage from './pages/ActingDriverPage'; // Import the Acting Driver Page

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Routes for Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-rental" element={<CarRentalPage />} />
        <Route path="/self-driving" element={<SelfDrivingCarPage />} />
        <Route path="/acting-drivers" element={<ActingDriverPage />} />
      </Routes>
    </div>
  );
};

export default App;
