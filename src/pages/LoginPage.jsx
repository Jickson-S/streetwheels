import React from 'react';
import { FaApple, FaGoogle, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-6 space-x-2">
          <FaCar className="text-2xl text-black" />
          <span className="text-xl font-bold">Qent</span>
        </div>

        <h2 className="text-xl font-semibold">Welcome Back</h2>
        <p className="text-gray-600 mb-4">Ready to hit the road.</p>

        <input type="text" placeholder="Email/Phone Number" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
        <input type="password" placeholder="Password" className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md" />

        <div className="flex items-center justify-between mb-4 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember Me
          </label>
          <a href="#" className="text-gray-600 hover:underline">Forgot Password</a>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-full mb-3">Login</button>

        <Link to="/signup">
          <button className="w-full border border-black text-black py-2 rounded-full mb-4 hover:bg-black hover:text-white">
            Sign up
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
          Don’t have an account? <Link to="/signup" className="text-black font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
