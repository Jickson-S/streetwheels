import React from 'react';
import { FaApple, FaGoogle, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-6 space-x-2">
          <FaCar className="text-2xl text-black" />
          <span className="text-xl font-bold">Qent</span>
        </div>

        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

        <input type="text" placeholder="Full Name" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
        <input type="email" placeholder="Email Address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
        <input type="password" placeholder="Password" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Country" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md" />

        <button className="w-full bg-black text-white py-2 rounded-full mb-3">Sign up</button>

        <Link to="/login">
          <button className="w-full border border-black text-black py-2 rounded-full mb-4 hover:bg-black hover:text-white">
            Login
          </button>
        </Link>

        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-full mb-3">
          <FaApple className="mr-2" /> Apple Pay
        </button>
        <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-full">
          <FaGoogle className="mr-2" /> Google Pay
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link to="/login" className="text-black font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}
