import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-wrap max-[520px]:w-[520px] items-center justify-center h-fit bg-tertiary py-4 px-2 border-gray-800 border-2 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full ">
          <img src='public/assets/icons/home.png' height={60}/>
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
          Find Your Dream Home
        </h2>
      </div>
  
      
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full ">
          <img src='src/assets/icons/camera.png' height={60} />
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
          Unlock Property Value
        </h2>
      </div>
  
      <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full">
        <img src='src/assets/icons/building.png' height={60}/>
        </div>
        <h2 className="text-center text-base font-medium text-white font-Urbanist">
            Effortless Property Management
        </h2>
      </div>
  
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
