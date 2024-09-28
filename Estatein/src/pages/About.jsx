import { AboutHeroSection } from "../components/AboutHeroSection"
import { Achievements } from "../components/Achievements"
import { Discover } from "../components/Discover"
import { Explore } from "../components/Explore"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { OurValues } from "../components/OurValues"
import { FeaturesSectionDemo } from "../components/Process"
import TeamSection from "../components/TeamSection"
import { ValuedClients } from "../components/ValuedClients"



export const About = () => {
    return(
        <>
        <Discover/>
        <Navbar/>
        <AboutHeroSection/>
        <OurValues/>
        <Achievements/>
        <FeaturesSectionDemo/>
        <TeamSection/>
        <ValuedClients/>
        <Explore/>
        <Footer/>
        </>
    )
}