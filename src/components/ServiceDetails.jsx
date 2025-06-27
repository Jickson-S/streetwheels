export default function ServiceDetails() {
  return (
    <section className="py-16 bg-white text-black px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Service Promise</h2>
        <p className="text-lg leading-relaxed">
          At Street Wheels Cars Private Limited, we provide a seamless and hassle-free car rental experience. Our services are tailored for every type of traveler—from daily commuters to weekend adventurers and business travelers. We pride ourselves on transparency, safety, and exceptional customer care.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          All our cars are GPS-enabled, sanitized, and regularly serviced. Our self-drive options give you the freedom to travel your way, while our acting driver service connects you with experienced, background-verified drivers on demand.
        </p>
        <img
          src="/assets/service-details.jpg"
          alt="Service Details"
          className="w-full rounded-lg mt-6 shadow-lg"
        />
      </div>
    </section>
  );
}
