import { useEffect, useState } from "react";
import bmw from "../assets/bmw.png";

export default function Hero() {
  // left and right headlight states
  const [leftLight, setLeftLight] = useState("off");
  const [rightLight, setRightLight] = useState("off");

  useEffect(() => {
    // alternating sequence: left on, right off → left off, right on
    const sequence = [
      { left: "white", right: "off" },
      { left: "off", right: "white" },
      { left: "blue", right: "off" },
      { left: "off", right: "blue" },
    ];

    let index = 0;

    const interval = setInterval(() => {
      setLeftLight(sequence[index].left);
      setRightLight(sequence[index].right);
      index = (index + 1) % sequence.length;
    }, 500); // smooth speed

    return () => clearInterval(interval);
  }, []);

  const getLightClass = (color) => {
    switch (color) {
      case "white":
        return "bg-white opacity-100 scale-110 shadow-[0_0_50px_20px_rgba(255,255,255,0.5)]";
      case "blue":
        return "bg-blue-400 opacity-100 scale-110 shadow-[0_0_60px_25px_rgba(66,153,225,0.6)]";
      default:
        return "opacity-0 scale-75 shadow-none";
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

        {/* Car Image */}
        <img
          src={bmw}
          alt="BMW"
          className="w-full max-w-5xl object-contain relative z-0"
        />

        {/* Left Headlight */}
        <div
          className={`absolute top-[44%] left-[4%] md:top-[52%] md:left-[25%] 
            w-20 h-20 md:w-32 md:h-32 rounded-full blur-3xl
            transition-all duration-500 ${getLightClass(leftLight)}`}
        />

        {/* Left Ground Beam */}
        <div
          className={`absolute top-[60%] left-[10%] md:top-[70%] md:left-[30%]
            w-32 h-6 md:w-64 md:h-12 rounded-full blur-2xl
            transition-all duration-500 ${leftLight !== "off" ? "bg-white/20" : "opacity-0"}`}
        />

        {/* Right Headlight */}
        <div
          className={`absolute top-[44%] right-[4%] md:top-[52%] md:right-[25%] 
            w-20 h-20 md:w-32 md:h-32 rounded-full blur-3xl
            transition-all duration-500 ${getLightClass(rightLight)}`}
        />

        {/* Right Ground Beam */}
        <div
          className={`absolute top-[60%] right-[10%] md:top-[70%] md:right-[30%]
            w-32 h-6 md:w-64 md:h-12 rounded-full blur-2xl
            transition-all duration-500 ${rightLight !== "off" ? "bg-white/20" : "opacity-0"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}