import React, { useState } from 'react';
import { forgetPassword } from '../services/api/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try{
        await forgetPassword(email);
        setError('');
        setMessage('If this email is registered, a reset link will be sent.');
    }
    catch(e){
        console.log(e);
    }
    // Clear error and send success message
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#703BF7] transition-all duration-300`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#703BF7] text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#703BF7]/50"
          >
            Send Reset Link
          </button>
          {message && (
            <p className="mt-6 text-green-500 text-center font-medium animate-bounce">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
