import React from "react";

const drivers = [
  {
    id: 1,
    name: "Suresh Kumar",
    experience: "5+ years",
    rating: 4.8,
    image: "/images/drivers/suresh.jpg",
  },
  {
    id: 2,
    name: "Anand Raj",
    experience: "3+ years",
    rating: 4.6,
    image: "/images/drivers/anand.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    experience: "4+ years",
    rating: 4.9,
    image: "/images/drivers/rahul.jpg",
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
