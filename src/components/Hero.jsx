<<<<<<< HEAD
export default function Hero() {
  return (
    <section className="bg-black text-white h-[100vh] flex items-center justify-center flex-col text-center pt-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Street Wheels Cars Pvt Ltd</h1>
      <p className="text-lg md:text-xl">Reliable, Self-drive & Acting Drivers — All at One Place</p>
=======
import bmw from "../../public/assets/images/bmw.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
  const timers = [];

  // Blink 1
  timers.push(setTimeout(() => setLightsOn(true), 500));
  timers.push(setTimeout(() => setLightsOn(false), 1000));

  // Blink 2
  timers.push(setTimeout(() => setLightsOn(true), 1500));
  timers.push(setTimeout(() => setLightsOn(false), 2000));

  // Blink 3
  timers.push(setTimeout(() => setLightsOn(true), 2500));
  timers.push(setTimeout(() => setLightsOn(false), 3000));

  // Blink 4
  timers.push(setTimeout(() => setLightsOn(true), 3500));
  timers.push(setTimeout(() => setLightsOn(false), 4000));

  // Permanent ON
  timers.push(setTimeout(() => setLightsOn(true), 6000));

  // Cleanup timers on unmount
  return () => timers.forEach(timer => clearTimeout(timer));
}, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col">

      {/* Top Text */}
      <div className="z-20 px-6 pt-40 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Street Wheels Cars Pvt Ltd
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Reliable, Self-drive & Acting Drivers — All at One Place
        </p>
      </div>

      {/* Car Container */}
      <div className="flex-grow relative flex items-center justify-center">

        {/* Car Image */}
        <img
          src={bmw}
          alt="BMW"
          className="w-full max-w-5xl object-contain relative z-0"
        />

        {/* Left Headlight */}
        <div
          className={`absolute top-[44%] left-[4%] md:top-[52%] md:left-[25%] 
            w-20 h-20 md:w-32 md:h-32 rounded-full bg-white blur-3xl 
            transition-all duration-1000 
            ${lightsOn ? "opacity-100 scale-110" : "opacity-0 scale-75"}`}
        />

        {/* Right Headlight */}
        <div
          className={`absolute top-[44%] right-[4%] md:top-[52%] md:right-[25%] 
            w-20 h-20 md:w-32 md:h-32 rounded-full bg-white blur-3xl 
            transition-all duration-1000 
            ${lightsOn ? "opacity-100 scale-110" : "opacity-0 scale-75"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
      </div>
>>>>>>> 1d0c453 (Initial commit: Hero section with blinking headlights)
    </section>
  );
}