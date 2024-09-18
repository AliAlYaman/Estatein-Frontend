import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/api/api"; // Ensure this imports the correct register API function

// Custom hook for form state management
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange];
};

const RegisterForm = () => {
  const [formValues, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Validation Functions
  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameIsValid = (name) => name.trim().length > 2;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formValues;

    // Validation logic
    if (!nameIsValid(name)) {
      setError("Please enter your full name (at least 3 characters)");
      return;
    }
    if (!emailIsValid(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Attempt to register the user
      await register(name, email, password);
      setError(""); // Clear any existing errors
      console.log("Registered successfully:", { name, email });
      navigate('/login');  // Redirect to dashboard after successful registration
    } catch (error) {
      // Handle errors (e.g., from the API)
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Brand Logo */}
        <div className="text-center mb-8">
          <img
            src="src/assets/logo/logo.png"
            alt="Brand Logo"
            className="mx-auto h-12 w-12"
          />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-800">
            Create an Account
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Full Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
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
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#703BF7] focus:border-transparent transition-all"
              aria-label="Confirm password"
            />
          </div>

          {/* Error Message with aria-live for accessibility */}
          {error && (
            <div
              className="mb-4 text-red-600 text-sm font-semibold"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#703BF7] text-white font-semibold rounded-md hover:bg-[#5f2ddf] focus:outline-none focus:ring-2 focus:ring-[#703BF7] transition-all"
            >
              Sign Up
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex justify-between text-sm text-gray-600">
            <Link to="/login" className="hover:underline">
              Already have an account?{" "}
              <span className="text-primary font-bold">Sign in</span>
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

export default RegisterForm;
