import Card from "../components/Cards";
import { Discover } from "../components/Discover";
import { Navbar } from "../components/Navbar";
import { ServicesAbout } from "../components/ServicesAbout";

export const Services = () => {
    return(<div className="bg-tertiary">
        <Discover/>
        <Navbar/>
        <ServicesAbout/>
        <Card/>
    </div>);
}