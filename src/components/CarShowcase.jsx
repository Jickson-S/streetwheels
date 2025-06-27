// src/components/CarShowcase.jsx (modern redesign with Tailwind + shadow + card layout)
export default function CarShowcase() {
  const cars = [
    {
      name: "Toyota Innova Crysta",
      image: "/assets/innova.jpg",
      seats: "7 Seater",
      fuel: "Diesel",
      transmission: "Manual",
      bags: "3 Bags",
      price: "₹4500/day",
    },
    {
      name: "Tata Altroz",
      image: "/assets/altroz.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹3000/day",
    },
    {
      name: "Maruti Suzuki Fronx",
      image: "/assets/fronx.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹3200/day",
    },
    {
      name: "Maruti Suzuki Ertiga",
      image: "/assets/ertiga.jpg",
      seats: "7 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "3 Bags",
      price: "₹3500/day",
    },
    {
      name: "Maruti Suzuki Baleno",
      image: "/assets/baleno.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2900/day",
    },
    {
      name: "Maruti Suzuki Celerio",
      image: "/assets/celerio.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2700/day",
    },
    {
      name: "Maruti Suzuki Swift",
      image: "/assets/swift.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2800/day",
    },
    {
      name: "Kwid",
      image: "/assets/kwid.jpg",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2600/day",
    },
  ];

  return (
    <section id="cars" className="py-20 px-4 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🚗 Our Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cars.map((car, idx) => (
          <div
            key={idx}
            className="group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden"
          >
            <div className="overflow-hidden h-52">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transform group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition">{car.name}</h3>
              <div className="text-sm text-gray-600 mb-1 flex justify-between">
                <span><strong>Seats:</strong> {car.seats}</span>
                <span><strong>Fuel:</strong> {car.fuel}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2 flex justify-between">
                <span><strong>Trans:</strong> {car.transmission}</span>
                <span><strong>Bags:</strong> {car.bags}</span>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-yellow-500 text-white px-4 py-1 text-sm rounded-full shadow-sm">{car.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

