import { Link } from "react-router-dom";

export const Explore = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row w-full  h-fit justify-around items-center bg-tertiary bg-[url('assets/background/CTA.png')] bg-cover px-24 py-8 md:py-16">
        <div className="flex flex-col font-bold gap-4 md:gap-6 w-full">
          <h2 className="text-white font-Urbanist text-[20px] md:text-[28px] text-center md:text-start">
            What Our Clients Say
          </h2>
          <p className="font-Urbanist text-[#999999] text-[14px] md:text-[16px] text-center md:text-start leading-relaxed w-full">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            <br className="hidden md:block" /> Estatein is here to assist you every step of the way. Take
            the first step towards your real estate goals and <br className="hidden md:block" /> explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Link className="mt-4 text-center sm:w-fit w-full md:mt-0 text-[12px] md:text-[14px] text-white font-Urbanist font-semibold rounded-md border border-primary bg-primary px-5 py-3 whitespace-nowrap">
          Browse Properties
        </Link>
      </div>
    </>
  );
};
