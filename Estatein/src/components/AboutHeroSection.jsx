import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const AboutHeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect after the component mounts
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800); // Delay to start the fade-in effect
      return () => clearTimeout(timer); // Clean up the timer
    }, []);

  return (
    <>
      
      <div className="flex flex-col md:flex-row md:h-[600px] h-auto font-Urbanist text-white xl:px-24 lg:px-12 md:px-8 px-12 bg-tertiary 2xl:mt-10 pt-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start  md:w-1/2 w-full bg-tertiary gap-3 p-4 md:p-8 ">
          <p className="text-[32px] md:text-[45px] leading-tight font-semibold text-center md:text-left ">
          Our Journey
          </p>
          <p className="text-[14px] md:text-[16px] text-gray-500 leading-relaxed text-center md:text-left">
          Our story is one of continuous growth and evolution.We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 w-full">
          <img
            src="assets/background/SubContainer.png"
            className="h-full w-full object-contain"
            alt="Hero background"
          />
        </div>
      </div>
    </>
  );
};
