import React from "react";

const drivers = [
  {
    id: 1,
    name: "Shankar",
    experience: "5+ years",
    rating: 4.8,
    image: "/assets/images/drivers/1.jpg",
  },
  {
    id: 2,
    name: "Deva",
    experience: "4+ years",
    rating: 4.6,
    image: "/assets/images/drivers/2.jpg",
  },
  {
    id: 3,
    name: "Ravi",
    experience: "3+ years",
    rating: 4.9,
    image: "/assets/images/drivers/3.jpg",
  },
];

const DriverDetails = () => {
  return (
    <section id="drivers" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Professional Drivers</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-gray-50 rounded-2xl p-4 shadow hover:shadow-md transition"
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{driver.name}</h3>
              <p className="text-gray-500">Experience: {driver.experience}</p>
              <p className="text-yellow-500 font-semibold">⭐ {driver.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverDetails;
