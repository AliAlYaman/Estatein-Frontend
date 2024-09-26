import { AboutHeroSection } from "../components/AboutHeroSection"
import { Achievements } from "../components/Achievements"
import { Discover } from "../components/Discover"
import { Navbar } from "../components/Navbar"
import { OurValues } from "../components/OurValues"
import { FeaturesSectionDemo } from "../components/Process"



export const About = () => {
    return(
        <>
        <Discover/>
        <Navbar/>
        <AboutHeroSection/>
        <OurValues/>
        <Achievements/>
        <FeaturesSectionDemo/>
        </>
    )
}