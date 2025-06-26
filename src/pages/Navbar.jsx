import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo in Desktop and Mobile View */}
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src={logo} alt="StreetWheels Logo" className="h-10 mr-2" />
          <span className="hidden md:block">StreetWheels</span> {/* Optional text beside logo on desktop */}
        </Link>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-200">Home</Link>
          <Link to="/car-rental" className="text-white hover:text-purple-200">Car Rental</Link>
          <Link to="/self-driving" className="text-white hover:text-purple-200">Self Driving</Link>
          <Link to="/acting-drivers" className="text-white hover:text-purple-200">Acting Drivers</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="text-white hover:text-purple-200">Home</Link>
          <Link to="/car-rental" className="text-white hover:text-purple-200">Car Rental</Link>
          <Link to="/self-driving" className="text-white hover:text-purple-200">Self Driving</Link>
          <Link to="/acting-drivers" className="text-white hover:text-purple-200">Acting Drivers</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
