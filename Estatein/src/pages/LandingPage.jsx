import { useEffect, useState } from "react";
import { Discover } from "../components/Discover";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { api } from "../services/api/api";
import Cards from "../components/Cards";
import { PaginatedItems } from "../components/Paginate";
import { CustomerReviews } from "../components/CustomerReview";
import FAQCards from "../components/FAQ";
import { Explore } from "../components/Explore";
import Footer from "../components/Footer";



export const LandingPage = () => {
    const faqData = [
      { question: "How do I search for properties on Estatein?", answer: "Learn how to use our user-friendly search tools to find properties that match your criteria." },
      { question: "What documents do I need to sell my property through Estatein?", answer: "Find out about the necessary documentation for listing your property with us." },
      { question: "How can I contact an Estatein agent?", answer: "Discover the different ways you can get in touch with our experienced agents." },
      { question: "How do I search for properties on Estatein?", answer: "Learn how to use our user-friendly search tools to find properties that match your criteria." },
      { question: "What documents do I need to sell my property through Estatein?", answer: "Find out about the necessary documentation for listing your property with us." },
      { question: "How can I contact an Estatein agent?", answer: "Discover the different ways you can get in touch with our experienced agents." },
      { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for building custom designs." },
      { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
      { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for building custom designs." },
      // Add more FAQs here
    ];
      
    const handleClick = async () => {
        const token = localStorage.getItem('token'); 
        if (!token) {
            console.error('No token found. Please log in.');
            return;
          }
        try {
          // Now making the actual request to check if the user is authenticated
          const response = await api.get('/api/user', {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`, //1|IOdksYzwM5XDgq4b9DKfeoVKD5QE7MR9Ify2hT0zd4a2c76f Replace 'your_token' with the actual token stored in your app (localStorage, context, etc.)
            },
          });
          console.log(response.data); // This will contain the user data if authenticated
        } catch (e) {
          console.log(e); // Handle the error (unauthenticated, network error, etc.)
        }
      };
    return(<div className="bg-tertiary">
    <Discover/>
    <Navbar/>
    <HeroSection/>
    <Cards/>
    {/* <PaginatedItems itemsPerPage={3}/> */}
    <CustomerReviews/>
    <FAQCards faqs={faqData}/>
    <Explore/>
    <Footer/>
    </div>);
}