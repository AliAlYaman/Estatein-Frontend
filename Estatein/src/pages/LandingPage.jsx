import { useEffect, useState } from "react";
import { Discover } from "../components/Discover";
import { Navbar } from "../components/Navbar";
import { api } from "../services/api/api";



export const LandingPage = () => {
    
     
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
    return(<>
    <Discover/>
    <Navbar/>
    </>);
}