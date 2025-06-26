import React from 'react';

const CarRentalPage = () => {
  // List of available cars for rent (you can eventually pull this data from an API)
  const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      model: '2023',
      pricePerDay: 50,
      availability: 'Available Now',
      image: 'https://via.placeholder.com/400x250?text=Toyota+Camry', // Use actual image URLs or placeholders
    },
    {
      id: 2,
      name: 'Honda Accord',
      model: '2022',
      pricePerDay: 45,
      availability: 'Available Now',
      image: 'https://via.placeholder.com/400x250?text=Honda+Accord',
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      model: '2022',
      pricePerDay: 80,
      availability: 'Available Now',
      image: 'https://via.placeholder.com/400x250?text=BMW+3+Series',
    },
    {
      id: 4,
      name: 'Ford Mustang',
      model: '2023',
      pricePerDay: 100,
      availability: 'Unavailable',
      image: 'https://via.placeholder.com/400x250?text=Ford+Mustang',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Car Rentals</h1>
        <p className="mt-4 text-xl">Browse through our fleet of cars available for rent.</p>
      </header>

      {/* Car Rental List */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map(car => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{car.name} ({car.model})</h3>
                <p className="text-xl text-gray-600 mt-2">Price: ${car.pricePerDay} per day</p>
                <p className="text-gray-600 mt-2">{car.availability}</p>
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
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2025 StreetWheels. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CarRentalPage;
