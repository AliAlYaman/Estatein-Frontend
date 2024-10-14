import Card from "../components/Cards";
import { Discover } from "../components/Discover";
import { Navbar } from "../components/Navbar";
import { ServicesHeroSection } from "../components/ServicesHeroSection";

export const Services = () => {
    return(<>
    <Discover/>
    <Navbar/>
    <ServicesHeroSection/>
    <Card/>
    </>);
}