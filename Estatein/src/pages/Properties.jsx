import { Discover } from "../components/Discover";
import { Explore } from "../components/Explore";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ContactForm } from "../components/PropertiesContact";
import { PropertiesHeroSection } from "../components/PropertiesHeroSection";

export const Properties = () =>{
    return(<div className="bg-tertiary">
    <Discover/>
    <Navbar/>
    <PropertiesHeroSection/>
    <ContactForm/>
    <Explore/>
    <Footer/>
    </div>);
}