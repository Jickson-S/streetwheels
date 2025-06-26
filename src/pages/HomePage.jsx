import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to StreetWheels Car Rental</h1>
        <p className="mt-4 text-xl">Your best choice for car rentals, self-driving cars, and reliable acting drivers.</p>
      </header>

      {/* Introduction Section */}
      <section className="text-center py-20 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At StreetWheels, we offer a wide range of vehicles for your driving needs, from traditional rentals to self-driving cars and acting drivers.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Explore Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Car Rental */}
          <Link to="/car-rental" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600">Car Rentals</h3>
              <p className="mt-2 text-gray-600">Browse through our fleet of vehicles available for rent.</p>
            </div>
          </Link>

          {/* Self-Driving Cars */}
          <Link to="/self-driving" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600">Self Driving Cars</h3>
              <p className="mt-2 text-gray-600">Drive a car on your own, with our fully automated self-driving options.</p>
            </div>
          </Link>

          {/* Acting Drivers */}
          <Link to="/acting-drivers" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600">Available Acting Drivers</h3>
              <p className="mt-2 text-gray-600">Hire a professional driver for your trips. Available now and on-demand.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-auto">
        <p>&copy; 2025 StreetWheels. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
