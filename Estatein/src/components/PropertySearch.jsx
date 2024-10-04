import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Maximize,
  Calendar,
  Search,
} from "lucide-react";
import { searchProperty } from "../services/api/api"; // API function

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
  const [properties, setProperties] = useState([]); // State to store search results
  const [loading, setLoading] = useState(false); // Loading state
  const [showAll, setShowAll] = useState(false); // To show all properties or only the first 9

  // Fetch properties from localStorage on component mount
  useEffect(() => {
    const storedProperties = localStorage.getItem("properties");
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    }
  }, []);

  const handleSearch = async () => {
    const searchData = {
      searchTerm,
      location,
      propertyType,
      pricingRange,
      propertySize,
      buildYear,
    };

    try {
      setLoading(true); // Start loading
      const result = await searchProperty(searchData); // Call the search API
      setProperties(result); // Store the result in state

      // Save properties to localStorage
      localStorage.setItem("properties", JSON.stringify(result));

      setShowAll(false); // Reset showing all when new search happens
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const displayedProperties = showAll ? properties : properties.slice(0, 9);

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
                "1000 - 2000 sq",
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

      {/* Display loading state */}
      {loading && <p className="mt-4">Loading properties...</p>}

      {/* Display the search results */}
      {properties.length > 0 && (
        <div className="mt-8 w-full">
          <h2 className="text-xl text-white mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProperties.map((property, index) => (
              <div
                key={property.id}
                className="bg-secondary border border-gray-600 font-Urbanist text-white shadow-md rounded-lg overflow-hidden p-3 flex flex-col justify-between"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[350px] object-cover rounded-lg"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {property.subtitle}
                  </p>
                  <div className="flex flex-wrap w-full justify-between items-center gap-2 py-3">
                    <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                      <img
                        src="assets/icons/bedroom.png"
                        alt="bedroom"
                        className="h-4"
                      />
                      <p className="text-xs sm:text-sm whitespace-nowrap">
                        {property.bedroom}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                      <img
                        src="assets/icons/bathroom.png"
                        alt="bathroom"
                        className="h-4"
                      />
                      <p className="text-xs sm:text-sm whitespace-nowrap">
                        {property.bathroom}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-[#262626] rounded-full">
                      <img
                        src="assets/icons/villa.png"
                        alt="villa"
                        className="h-4"
                      />
                      <p className="text-xs sm:text-sm whitespace-nowrap">
                        {property.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 py-4">
                    <div className="flex flex-col">
                      <p className="text-sm text-[#999999]">Price:</p>
                      <p className="text-white text-lg font-bold">
                        {property.price}
                      </p>
                    </div>
                    <button className="mt-4 px-4 py-2 w-full text-sm  bg-primary text-white rounded-md hover:bg-blue-600">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show "Load More" button if there are more than 9 properties */}
          {properties.length > 9 && !showAll && (
            <button
              className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              onClick={() => setShowAll(true)}
            >
              Load More Properties
            </button>
          )}
        </div>
      )}

      {/* Display a message if no results are found */}
      {!loading && properties.length === 0 && (
        <p className="text-gray-400 mt-4">No properties found.</p>
      )}
    </div>
  );
};
