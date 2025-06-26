import React from 'react';

const ActingDriverPage = () => {
  // List of available acting drivers
  const drivers = [
    {
      id: 1,
      name: 'John Doe',
      experience: '5 years of acting and professional driving experience.',
      pricePerDay: 150,
      availability: 'Available Now',
      bio: 'John is an experienced actor and professional driver, ready to make your trip more exciting with his acting skills and driving expertise.',
      image: 'https://via.placeholder.com/400x250?text=John+Doe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      experience: '3 years of acting and high-end driving experience.',
      pricePerDay: 140,
      availability: 'Available Now',
      bio: 'Jane brings energy, enthusiasm, and professionalism, making every ride a memorable experience.',
      image: 'https://via.placeholder.com/400x250?text=Jane+Smith',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      experience: '8 years of acting and stunt driving.',
      pricePerDay: 200,
      availability: 'Unavailable',
      bio: 'Mark is known for his stunt driving skills and is ready to take you on an adrenaline-filled ride with his acting talent.',
      image: 'https://via.placeholder.com/400x250?text=Mark+Johnson',
    },
    {
      id: 4,
      name: 'Emma White',
      experience: '4 years of acting and high-performance driving.',
      pricePerDay: 180,
      availability: 'Available Now',
      bio: 'Emma specializes in dramatic roles and precise driving, creating a flawless experience for you.',
      image: 'https://via.placeholder.com/400x250?text=Emma+White',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-purple-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Acting Driver Service</h1>
        <p className="mt-4 text-xl">Rent a professional acting driver for your next adventure.</p>
      </header>

      {/* Acting Driver List */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Available Acting Drivers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {drivers.map(driver => (
            <div key={driver.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <img src={driver.image} alt={driver.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{driver.name}</h3>
                <p className="text-gray-600 mt-2">{driver.experience}</p>
                <p className="text-xl text-gray-600 mt-4">Price: ${driver.pricePerDay} per day</p>
                <p className="text-gray-600 mt-2">{driver.bio}</p>
                <p className={`text-lg font-semibold mt-4 ${driver.availability === 'Available Now' ? 'text-green-500' : 'text-red-500'}`}>
                  {driver.availability}
                </p>
                <button 
                  className={`mt-4 py-2 px-4 text-white font-semibold rounded-lg w-full ${driver.availability === 'Available Now' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-400 cursor-not-allowed'}`}
                  disabled={driver.availability === 'Unavailable'}
                >
                  {driver.availability === 'Available Now' ? 'Book Now' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActingDriverPage;
