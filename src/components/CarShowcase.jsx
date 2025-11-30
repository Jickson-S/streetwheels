// src/components/CarShowcase.jsx (modern redesign with Tailwind + shadow + card layout)
export default function CarShowcase() {
  const cars = [
    {
      name: "Renault KWID",
      image: "/assets/images/cars/kwid.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹1,600/day",
    },
    {
      name: "Maruti Suzuki Celerio",
      image: "/assets/images/cars/celerio.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹1,700/day",
    },
    {
      name: "Tata Tiago",
      image: "/assets/images/cars/tiago.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹1,900/day",
    },
    {
      name: "Maruti Suzuki Swift",
      image: "/assets/images/cars/swift.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2,100/day",
    },
    {
      name: "Tata Altroz",
      image: "/assets/images/cars/altroz.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2,400/day",
    },
    {
      name: "Maruti Suzuki Baleno",
      image: "/assets/images/cars/baleno.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2,500/day",
    },
    {
      name: "Hyundai i20",
      image: "/assets/images/cars/i20.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2,600/day",
    },
    {
      name: "Maruti Suzuki Fronx",
      image: "/assets/images/cars/fronx.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹2,800/day",
    },
    {
      name: "Nissan Magnite",
      image: "/assets/images/cars/magnite.webp",
      seats: "5 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "2 Bags",
      price: "₹3,300/day",
    },
    {
      name: "Maruti Suzuki Ertiga",
      image: "/assets/images/cars/ertiga.webp",
      seats: "7 Seater",
      fuel: "Petrol",
      transmission: "Manual",
      bags: "3 Bags",
      price: "₹3,800/day",
    },
    {
      name: "Toyota Innova Crysta",
      image: "/assets/images/cars/innova.webp",
      seats: "7 Seater",
      fuel: "Diesel",
      transmission: "Manual",
      bags: "3 Bags",
      price: "₹4,000/day",
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

