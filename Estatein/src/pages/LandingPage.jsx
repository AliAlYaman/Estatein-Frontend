import { Discover } from "../components/Discover";
import { Navbar } from "../components/Navbar";
import { checkAuth } from "../services/api/api";



export const LandingPage = () => {  
    return(<>
    <Discover/>
    <Navbar/>
    </>);
}