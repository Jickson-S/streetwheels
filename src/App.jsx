import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarSlider from "./components/CarSlider";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import CarShowcase from "./components/CarShowcase";
import DriverDetails from "./components/DriverDetails";
import UserReviews from "./components/UserReviews";
import ContactForm from "./components/ContactForm";
import LegalPolicies from "./components/LegalPolicies";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
        <ServiceDetails />
      </section>

      <section id="cars">
        <CarShowcase />
      </section>

      <section id="drivers">
        <DriverDetails />
      </section>

      <section id="reviews">
        <UserReviews />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <section id="policies">
        <LegalPolicies />
      </section>

      <Footer />
    </div>
  );
}

export default App;
