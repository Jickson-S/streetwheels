import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <FaCar className="text-2xl text-black" />
          <span className="text-xl font-bold">Qent</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Reset your password</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Continue Button */}
        <button className="w-full bg-black text-white py-2 rounded-full mb-6 hover:opacity-90">
          Continue
        </button>

        {/* Back to Login */}
        <p className="text-sm text-gray-500 mb-3">
          <Link to="/login" className="hover:underline">
            Return to sign in
          </Link>
        </p>

        {/* Create Account */}
        <p className="text-sm text-gray-500">
          Create a <Link to="/signup" className="text-black font-medium hover:underline">New account</Link>
        </p>
      </div>
    </div>
  );
}
