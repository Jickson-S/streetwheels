export default function Services() {
  const services = [
    { title: "Car Rental", desc: "Affordable rental cars for every need." },
    { title: "Self Driving Cars", desc: "Drive at your own pace and time." },
    { title: "Acting Driver", desc: "Hire a professional driver anytime." },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
