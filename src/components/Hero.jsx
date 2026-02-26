import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bmw from "../assets/bmw.png";

export default function Hero() {
  const [phase, setPhase] = useState("off");

  useEffect(() => {
    const timeline = [
      { state: "flash1", delay: 500 },
      { state: "on", delay: 800 },
      { state: "flash2", delay: 1200 },
      { state: "off", delay: 1600 },
      { state: "flash3", delay: 2000 },
      { state: "on", delay: 2300 },
      { state: "flash4", delay: 2700 },
      { state: "off", delay: 3100 },
    ];

    const timers = timeline.map((step) =>
      setTimeout(() => {
        setPhase(step.state);
      }, step.delay)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const getLightStyle = () => {
    switch (phase) {
      case "flash1":
      case "flash2":
      case "flash3":
      case "flash4":
        return "bg-white opacity-100 shadow-[0_0_80px_40px_rgba(255,255,255,0.7)]";
      case "on":
        return "bg-white opacity-90 shadow-[0_0_60px_30px_rgba(255,255,255,0.6)]";
      default:
        return "opacity-0";
    }
  };

  const getScale = () => {
    switch (phase) {
      case "flash1":
      case "flash2":
      case "flash3":
      case "flash4":
        return 1.2;
      case "on":
        return 1.1;
      default:
        return 0.7;
    }
  };

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

        {/* Car Fade + Cinematic Zoom */}
        <motion.img
          src={bmw}
          alt="BMW"
          className="w-full max-w-5xl object-contain relative z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
        />

        {/* LEFT HEADLIGHT */}
        <motion.div
          className={`absolute top-[44%] left-[4%] md:top-[52%] md:left-[25%]
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full blur-3xl ${getLightStyle()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "off" ? 0 : 1, scale: getScale() }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* RIGHT HEADLIGHT */}
        <motion.div
          className={`absolute top-[44%] right-[4%] md:top-[52%] md:right-[25%]
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full blur-3xl ${getLightStyle()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "off" ? 0 : 1, scale: getScale() }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Ground Glow */}
        <motion.div
          className="absolute top-[65%] w-72 h-16 bg-white/20 blur-2xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase.includes("on") ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      </div>
    </section>
  );
}