import React from 'react';
import { FaCar,FaSearch, FaStar, FaHeart, FaUserCircle, FaMapMarkerAlt, FaChair, FaHome, FaBell, FaCommentDots, FaUser } from 'react-icons/fa';
import { TbSettings2 } from 'react-icons/tb';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <FaCar className="text-xl" />
          <h1 className="text-xl font-bold">Qent</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <TbSettings2 className="text-2xl" />
          <FaUserCircle className="text-2xl" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search your dream car..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Brand List */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="flex space-x-6 overflow-x-auto pb-2">
          {["Tesla", "Lamborghini", "BMW", "Ferrari"].map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center text-white font-semibold">
                {brand[0]}
              </div>
              <span className="text-sm mt-1">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best Cars */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Best Cars</h3>
          <a href="#" className="text-sm text-gray-500 hover:underline">View All</a>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[{
            name: "Ferrari-FF",
            location: "Washington DC",
            rating: 5.0,
            seats: 4,
            price: "$200/Day",
            image: "https://i.imgur.com/6qTAgYv.png",
          },
          {
            name: "Tesla Model S",
            location: "Chicago, USA",
            rating: 5.0,
            seats: 5,
            price: "$100/Day",
            image: "https://i.imgur.com/fQZL7CR.png",
          }].map((car, index) => (
            <div key={index} className="bg-white shadow rounded-xl w-64 flex-shrink-0">
              <img src={car.image} alt={car.name} className="rounded-t-xl h-32 w-full object-cover" />
              <div className="p-3">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{car.name}</h4>
                  <FaHeart className="text-gray-400" />
                </div>
                <div className="flex items-center text-sm text-yellow-500 mb-1">
                  <FaStar className="mr-1" /> {car.rating}
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <FaMapMarkerAlt className="mr-1" /> {car.location}
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span className="flex items-center"><FaChair className="mr-1" /> {car.seats} Seats</span>
                  <span className="font-semibold">{car.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Section (Placeholder for now) */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Nearby</h3>
          <a href="#" className="text-sm text-gray-500 hover:underline">View All</a>
        </div>
        <div className="bg-gray-200 rounded-xl h-36 flex justify-center items-center">
          <p className="text-gray-500">Nearby cars carousel here</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 p-3 px-6 rounded-t-2xl flex justify-between items-center z-10">
        <FaHome className="text-xl" />
        <FaBell className="text-xl text-gray-400" />
        <FaSearch className="text-xl text-gray-400" />
        <FaCommentDots className="text-xl text-gray-400" />
        <FaUser className="text-xl text-gray-400" />
      </div>
    </div>
  );
}
