import React, { useState } from "react";

const InputField = ({ type, placeholder, value, onChange, isInvalid, errorMessage }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 w-full ${
        isInvalid ? "border border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
      }`}
    />
    {isInvalid && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
  </div>
);

const SelectField = ({ placeholder, value, onChange, options, isInvalid, errorMessage }) => (
  <div>
    <select
      value={value}
      onChange={onChange}
      className={`bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 w-full ${
        isInvalid ? "border border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {isInvalid && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
  </div>
);

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");  // Initialize message state
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const propertyTypes = ["Villa", "Apartment", "House"];
  
  // Validation function
  const validateForm = () => {
    const errors = {};
    
    if (firstName.length < 2) errors.firstName = "First Name must be at least 2 characters.";
    if (lastName.length < 2) errors.lastName = "Last Name must be at least 2 characters.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "Please enter a valid email.";

    if (!propertyTypes.includes(propertyType)) errors.propertyType = "Select a valid property type.";
    if (isNaN(bedrooms)) errors.bedrooms = "Bedrooms must be a number.";
    if (isNaN(bathrooms)) errors.bathrooms = "Bathrooms must be a number.";

    if (isNaN(budget) || budget <= 0) errors.budget = "Please enter a valid budget.";
    if (!agree) errors.agree = "You must agree to the terms and conditions.";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully!");
      // Handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen w-full bg-opacity-90 text-gray-300 flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-24">
      <div className="w-full bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Let's Make it Happen</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName}
            />
            <InputField
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName}
            />
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
            />
            <InputField
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Dropdown Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              placeholder="Preferred Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              options={["New York", "Los Angeles", "Chicago"]}
            />
            <SelectField
              placeholder="Property Type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              options={propertyTypes}
              isInvalid={!!errors.propertyType}
              errorMessage={errors.propertyType}
            />
            <InputField
              type="number"
              placeholder="No. of Bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              isInvalid={!!errors.bedrooms}
              errorMessage={errors.bedrooms}
            />
            <InputField
              type="number"
              placeholder="No. of Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              isInvalid={!!errors.bathrooms}
              errorMessage={errors.bathrooms}
            />
          </div>

          {/* Budget */}
          <InputField
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            isInvalid={!!errors.budget}
            errorMessage={errors.budget}
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={4}
            value={message}  // Added message state here
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
              errors.message ? "border border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
            }`}
          ></textarea>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className={`form-checkbox text-purple-500 ${
                errors.agree ? "border-red-500" : ""
              }`}
            />
            <span className="ml-2">I agree with Terms and Conditions</span>
          </div>
          {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Send My Message
          </button>
        </form>
      </div>
    </div>
  );
};
