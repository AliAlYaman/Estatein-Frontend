import { PaginatedItems } from "./Paginate";
import { PropertySearch } from "./PropertySearch";

export const PropertiesHeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-10 text-white w-full  lg:px-20 xl:px-32 md:px-16 sm:px-12 px-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="flex justify-center w-full">
        <PropertySearch/>
        </div>
      </div>
    </>
  );
};
