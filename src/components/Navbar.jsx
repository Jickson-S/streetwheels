import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/logo.png" alt="Street Wheels Cars" className="w-32" />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#cars" className="hover:text-yellow-400">Cars</a>
          <a href="#drivers" className="hover:text-yellow-400">Drivers</a>
          <a href="#reviews" className="hover:text-yellow-400">Reviews</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <a href="#policies" className="hover:text-yellow-400">Policies</a>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-3">
          <a href="#services" className="block hover:text-yellow-400">Services</a>
          <a href="#cars" className="block hover:text-yellow-400">Cars</a>
          <a href="#drivers" className="block hover:text-yellow-400">Drivers</a>
          <a href="#reviews" className="block hover:text-yellow-400">Reviews</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
          <a href="#policies" className="block hover:text-yellow-400">Policies</a>
        </div>
      )}
    </header>
  );
}
