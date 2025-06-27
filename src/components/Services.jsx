// src/components/Services.jsx (modern layout with scrolling images and details)
export default function Services() {
  const services = [
    {
      title: "Car Rental",
      image: "/assets/service-rental.jpg",
      content:
        "We offer a wide range of rental vehicles including sedans, hatchbacks, and SUVs at the most affordable prices. Rent for a few hours, a day, or an entire week — flexible plans that suit your travel needs. All cars are sanitized and serviced regularly.",
    },
    {
      title: "Self Driving Cars",
      image: "/assets/service-selfdrive.jpg",
      content:
        "Enjoy the freedom to drive yourself anywhere with our self-driving car service. Perfect for family trips, weekend getaways, or daily commutes. Easy pickup and drop, and no driver fees. Total privacy, total control.",
    },
    {
      title: "Acting Drivers",
      image: "/assets/service-driver.jpg",
      content:
        "Hire professional, background-verified drivers for your own vehicle. Whether it’s an emergency or planned trip, our drivers are punctual, polite, and well-trained. Available 24/7 for hourly or full-day bookings.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">🚘 Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6 pb-6 px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="inline-block w-80 md:w-96 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-600 transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
