import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api/api";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Extract token and email from URL
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const emailFromURL = new URLSearchParams(location.search).get("email");

  // Set email from the URL
  useState(() => {
    setEmail(emailFromURL || "");
  }, [emailFromURL]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await api.get(`/sanctum/csrf-cookie`, {
        withCredentials: true, // Important to include credentials for cookies
      });
      const response = await api.post(
        "/api/reset-password",
        {
          token,
          email,
          password,
          password_confirmation: password,
        },
        {
          headers: {
            Accept: "application/json",
          },
          withCredentials: true,
          withXSRFToken: true,
        }
      );
      console.log(response.data);
      setMessage("Password reset successfully.");
      setError("");
      // Redirect to login after successful reset
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError("Error resetting password");
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors.email || "An error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-500 text-center">{message}</p>
        )}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
