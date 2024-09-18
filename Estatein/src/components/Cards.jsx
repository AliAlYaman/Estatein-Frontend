import React from 'react';

// StarIcon component with props for flexibility
const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Card component
const Card = () => {
  return (
    <div className="flex flex-wrap max-[520px]:w-[520px] items-center justify-center h-fit bg-tertiary py-4 px-2 border-gray-800 border-2 ">
    {/* Card Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {/* Card 1 */}
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full ">
          <img src='src/assets/icons/home.png' height={60}/>
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
          Find Your Dream Home
        </h2>
      </div>
  
      {/* Card 2 */}
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full ">
          {/* StarIcon */}
          <img src='src/assets/icons/camera.png' height={60} />
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
          Unlock Property Value
        </h2>
      </div>
  
      {/* Card 3 */}
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full">
        <img src='src/assets/icons/building.png' height={60}/>
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
            Effortless Property Management
        </h2>
      </div>
  
      {/* Card 4 */}
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full">
        <img src='src/assets/icons/sun.png' height={60}/>
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
        Smart Investments, Informed Decisions
        </h2>
      </div>
    </div>
  </div>  
  );
}

export default Card;
