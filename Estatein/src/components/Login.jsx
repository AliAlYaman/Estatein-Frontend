import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/api/api';

// Custom hook for form state management
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange];
};

const LoginForm = () => {
  const [formValues, handleChange] = useForm({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Regex for basic email validation
  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { email, password } = formValues;

    // Enhanced validation for email and password
    if (!emailIsValid(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    

    try{
      await login(email , password);
      navigate('/')
    } catch(e){
      console.log(e);
      return
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Brand Logo */}
        <div className="text-center mb-8">
          <img src="src\assets\logo\logo.png" alt="Brand Logo" className="mx-auto h-12 w-12" />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-800">Welcome Back!</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Password"
            />
          </div>

          {/* Error Message with aria-live for accessibility */}
          {error && (
            <div className="mb-4 text-red-600 text-sm font-semibold" aria-live="polite">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#703BF7] text-white font-semibold rounded-md hover:bg-[#5f2ddf] focus:outline-none focus:ring-2 focus:ring-[#703BF7] transition-all"
            >
              Sign In
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex justify-between text-sm text-gray-600">
            <Link to="/forgot-password" className="hover:underline">
              <span className='underline font-bold'>Forgot your password?</span>
            </Link>
            <Link to="/register" className="hover:underline">
              <span className=''>Don't have an account? </span><span className='text-primary font-bold'>Sign up</span>
            </Link>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-500">
        © 2024 Real Estate Management. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginForm;
