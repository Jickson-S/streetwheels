import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import CarSlider from "./components/CarSlider";
import AboutUs from "./components/AboutUs";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Navbar />
      <Hero />
      <CarSlider />
      <AboutUs />
      <Services />
      <ServiceDetails />
      <CarShowcase />
      <DriverDetails />
      <UserReviews />
      <ContactForm />
      <Footer />
    </div>
  );
}