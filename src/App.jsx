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
<<<<<<< HEAD

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

=======
  const [heroComplete, setHeroComplete] = useState(false);

  useEffect(() => {
    // Loader duration: 1500ms
    const loaderTimer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    // Once loader is done, wait for Hero animations to complete (~6.5 seconds)
    if (!loading) {
      const heroTimer = setTimeout(() => setHeroComplete(true), 6500);
      return () => clearTimeout(heroTimer);
    }
  }, [loading]);

  // Show Loader first
>>>>>>> 1d0c453 (Initial commit: Hero section with blinking headlights)
  if (loading) return <Loader />;

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
<<<<<<< HEAD
=======
      {/* Hero section displays first and alone */}
>>>>>>> 1d0c453 (Initial commit: Hero section with blinking headlights)
      <section id="hero">
        <Hero />
      </section>

<<<<<<< HEAD
      <section id="slider">
        <CarSlider />
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
=======
      {/* Car content slides in after hero animations complete */}
      {heroComplete && (
        <>


          <section id="about" className="animate-fadeIn">
            <AboutUs />
          </section>

          <section id="services" className="animate-fadeIn">
            <Services />
            <ServiceDetails />
          </section>

          <section id="cars" className="animate-fadeIn">
            <CarShowcase />
          </section>

          <section id="drivers" className="animate-fadeIn">
            <DriverDetails />
          </section>

          <section id="reviews" className="animate-fadeIn">
            <UserReviews />
          </section>

          <section id="contact" className="animate-fadeIn">
            <ContactForm />
          </section>

          <section id="policies" className="animate-fadeIn">
            <LegalPolicies />
          </section>

          <Footer />
        </>
      )}
>>>>>>> 1d0c453 (Initial commit: Hero section with blinking headlights)
    </div>
  );
}

export default App;
