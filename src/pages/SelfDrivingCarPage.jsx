import React from 'react';

const SelfDrivingCarPage = () => {
  // List of self-driving cars available for rent
  const cars = [
    {
      id: 1,
      name: 'Tesla Model S',
      model: '2023',
      pricePerDay: 150,
      availability: 'Available Now',
      description: 'Experience the future of driving with the Tesla Model S. Fully automated with autopilot.',
      image: 'https://via.placeholder.com/400x250?text=Tesla+Model+S',
    },
    {
      id: 2,
      name: 'Audi A8',
      model: '2022',
      pricePerDay: 120,
      availability: 'Available Now',
      description: 'A luxury sedan with advanced self-driving technology for smooth and comfortable rides.',
      image: 'https://via.placeholder.com/400x250?text=Audi+A8',
    },
    {
      id: 3,
      name: 'Mercedes-Benz S-Class',
      model: '2023',
      pricePerDay: 180,
      availability: 'Available Now',
      description: 'An exquisite self-driving car with supreme comfort and high-tech features.',
      image: 'https://via.placeholder.com/400x250?text=Mercedes+S-Class',
    },
    {
      id: 4,
      name: 'BMW iX',
      model: '2023',
      pricePerDay: 140,
      availability: 'Unavailable',
      description: 'A futuristic electric SUV with self-driving capabilities.',
      image: 'https://via.placeholder.com/400x250?text=BMW+IX',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-green-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Self-Driving Cars</h1>
        <p className="mt-4 text-xl">Rent a self-driving car and experience the future of travel.</p>
      </header>

      {/* Self-Driving Car List */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Available Self-Driving Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map(car => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{car.name} ({car.model})</h3>
                <p className="text-xl text-gray-600 mt-2">Price: ${car.pricePerDay} per day</p>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <p className={`text-lg font-semibold mt-4 ${car.availability === 'Available Now' ? 'text-green-500' : 'text-red-500'}`}>
                  {car.availability}
                </p>
                <button 
                  className={`mt-4 py-2 px-4 text-white font-semibold rounded-lg w-full ${car.availability === 'Available Now' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                  disabled={car.availability === 'Unavailable'}
                >
                  {car.availability === 'Available Now' ? 'Book Now' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6">
        <p>&copy; 2025 StreetWheels. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SelfDrivingCarPage;
