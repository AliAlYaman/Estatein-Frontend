import axios from 'axios';

// Create an axios instance with custom configuration
export const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your API's base URL
  withCredentials: true,
  
});


export const register = async (name, email, password) => {
    await api.get(`/sanctum/csrf-cookie`, {
      withCredentials: true, // Important to include credentials for cookies
    });
    const response = await api.post('/api/register', {
      name,
      email,
      password,
      password_confirmation: password,
    } , {
      headers: {
        Accept : 'application/json',
      },
      withCredentials: true,
      withXSRFToken: true
    });
    return response.data;
  };

// Example of setting a request interceptor (optional)
// api.interceptors.request.use(
//   (config) => {
//     // Modify or add authorization headers, like tokens
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Example of setting a response interceptor (optional)
// api.interceptors.response.use(
//   (response) => {
//     // Handle responses, e.g., success messages or caching data
//     return response;
//   },
//   (error) => {
//     // Handle errors globally, such as unauthorized requests or API errors
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized error, maybe redirect to login
//     }
//     return Promise.reject(error);
//   }
// );
