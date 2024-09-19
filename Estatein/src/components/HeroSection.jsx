import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const HeroSection = () => {
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
      <div className="flex flex-col max-[520px]:w-[520px] md:flex-row md:h-[600px] h-auto font-Urbanist text-white">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center  md:w-1/2 w-full bg-tertiary gap-3 p-4 md:p-8">
          <p className="text-[32px] md:text-[45px] leading-tight font-semibold text-center md:text-left ">
            Discover Your Dream <br />
            Property with Estatein
          </p>
          <p className="text-[14px] md:text-[16px] text-gray-500 leading-relaxed text-center md:text-left">
            Your journey to finding the perfect property begins here.
            <br /> Explore our listings to find the home that matches your
            dreams.
          </p>
          <div className="flex justify-center md:justify-start items-center w-[500px] gap-3  lg:w-[450px] md:w-full mb-2">
            {/* my-[20px] px-0 md:px-[80px] xl:w-[600px] */}
            <Link className="text-[12px] md:text-[14px] rounded-md border border-gray-700 px-5 py-3  whitespace-nowrap ">
              Learn More
            </Link>
            <Link className="text-[12px] md:text-[14px] rounded-md border border-primary bg-primary px-5 py-3 whitespace-nowrap">
              Browse Properties
            </Link>
          </div>
          
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 w-full">
          <img
            src="public/assets/background/HeroBackground.png"
            className="h-full w-full object-cover"
            alt="Hero background"
          />
        </div>
      </div>
    </>
  );
};
