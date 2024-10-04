import { Link } from "react-router-dom";

export const Discover = () => {
    return(<>
    <div className="flex font-Urbanist justify-center items-center  h-[80px] sm:h-[50px] xl:h-[65px] w-full  text-white bg-[url('assets/background/Banner.png')] bg-cover bg-no-repeat bg-center sm:text-sm md:text-base max-sm:text-xs">
        <p>Discover Your Dream Property with Estatein</p>
        <Link to=''><span className="underline ml-2">Learn More</span></Link>
    </div>
    </>);
}