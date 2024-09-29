import React, { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Maximize,
  Calendar,
  Search,
} from "lucide-react";

const Dropdown = ({ label, icon, options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 focus:outline-none"
      >
        {icon}
        <span>{selectedOption || label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-800 rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-gray-700 focus:outline-none"
              onClick={() => {
                onOptionSelect(option); // Update the selected option
                setIsOpen(false); // Close dropdown
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [pricingRange, setPricingRange] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [buildYear, setBuildYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Use selected values from dropdowns
    const searchData = {
      searchTerm,
      location,
      propertyType,
      pricingRange,
      propertySize,
      buildYear,
    };
    
    console.log(searchData);

    // Perform further actions like sending the data to an API or filtering properties
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 w-full">
      <div className="w-full bg-tertiary rounded-lg shadow-xl p-4">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a Property"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Dropdown
              label="Location"
              icon={<MapPin className="w-5 h-5" />}
              options={["New York", "Los Angeles", "Chicago", "Houston"]}
              selectedOption={location}
              onOptionSelect={setLocation}
            />
            <Dropdown
              label="Property Type"
              icon={<Home className="w-5 h-5" />}
              options={["House", "Apartment", "Condo", "Townhouse"]}
              selectedOption={propertyType}
              onOptionSelect={setPropertyType}
            />
            <Dropdown
              label="Pricing Range"
              icon={<DollarSign className="w-5 h-5" />}
              options={[
                "$100k - $200k",
                "$200k - $300k",
                "$300k - $400k",
                "$400k+",
              ]}
              selectedOption={pricingRange}
              onOptionSelect={setPricingRange}
            />
            <Dropdown
              label="Property Size"
              icon={<Maximize className="w-5 h-5" />}
              options={[
                "0 - 1000 sq ft",
                "1000 - 2000 sq ft",
                "2000 - 3000 sq ft",
                "3000+ sq ft",
              ]}
              selectedOption={propertySize}
              onOptionSelect={setPropertySize}
            />
            <Dropdown
              label="Build Year"
              icon={<Calendar className="w-5 h-5" />}
              options={["2020+", "2010 - 2020", "2000 - 2010", "Before 2000"]}
              selectedOption={buildYear}
              onOptionSelect={setBuildYear}
            />
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5" />
              <span>Find Property</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
