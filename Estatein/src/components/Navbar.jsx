import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/api/api";

export const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)
  // State to handle mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track the active link
  const [activeLink, setActiveLink] = useState("home");
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const checkAuth = ()=>{
    const token = localStorage.getItem('token'); 
        if (!token) {
            console.error('No token found. Please log in.');
            setIsAuth(false)
          }
        else{
          setIsAuth(true)
        }
  }

  const handleLogout = async()=>{
    await logout();
    setIsAuth(false)
  }

  useEffect(()=> {
    checkAuth()
  } , [])

  return (
    <>
      <div className="flex font-Urbanist max-[520px]:w-[520px] text-white justify-between items-center bg-secondary h-[60px] sm:px-[65px] xl:px-[120px] px-[16px] sm:h-[80px] xl:h-[100px] sm:text-[14px] text-lg  ">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-2">
          <img src="src/assets/logo/logo.png" height={50} width={50} alt="logo" />
          <p className="text-3xl">Estatein</p>
        </div>

        {/* Menu Section - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex">
          <ul className="flex justify-between items-center gap-5">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md ${
                activeLink === "home" ? "bg-tertiary border-gray-800 border-[0.75px]" : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-md ${
                activeLink === "about" ? "bg-tertiary border-gray-800 border-[0.75px]" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </Link>
            <Link
              to="/properties"
              className={`px-4 py-2 rounded-md ${
                activeLink === "properties" ? "bg-tertiary border-gray-800 border-[0.75px]" : ""
              }`}
              onClick={() => handleLinkClick("properties")}
            >
              Properties
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-md ${
                activeLink === "services" ? "bg-tertiary border-gray-800 border-[0.75px]" : ""
              }`}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </Link>
          </ul>
        </div>

        {/* Login Button - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex justify-between items-center ">
          {isAuth ? <button onClick={handleLogout} className="bg-tertiary  border-gray-800 border-[0.75px] px-4 py-2 rounded-md font-semibold" >Log out</button> : <Link to='/login' className="bg-tertiary  border-gray-800 border-[0.75px] px-4 py-2 rounded-md font-semibold">Log in</Link>}
        </div>

        {/* Hamburger Icon - Visible on mobile screens only */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when the hamburger is clicked */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-secondary text-white py-4 space-y-4 px-4">
          <Link
            to="/"
            className={`p-3 rounded-md ${activeLink === "home" ? "bg-tertiary" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`p-3 rounded-md ${activeLink === "about" ? "bg-tertiary" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About Us
          </Link>
          <Link
            to="/properties"
            className={`p-3 rounded-md ${activeLink === "properties" ? "bg-tertiary" : ""}`}
            onClick={() => handleLinkClick("properties")}
          >
            Properties
          </Link>
          <Link
            to="/services"
            className={`p-3 rounded-md ${activeLink === "services" ? "bg-tertiary" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          {isAuth ? <button onClick={handleLogout}   className={`text-start p-3 rounded-md ${activeLink === "services" ? "bg-tertiary" : ""}`}>
          Log out
          </button>:<Link to="/login"  className={`p-3 rounded-md ${activeLink === "services" ? "bg-tertiary" : ""}`}
            onClick={() => handleLinkClick("services")}>
            Log in
          </Link> }
        </div>
      )}
    </>
  );
};

