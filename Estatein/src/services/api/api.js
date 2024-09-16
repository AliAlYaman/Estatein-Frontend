import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken=true;
// Create an axios instance with custom configuration
export const api = axios.create({
  baseURL: "http://localhost:8000", // Replace with your API's base URL
});



export const register = async (name, email, password) => {
  await api.get(`/sanctum/csrf-cookie`, {
    withCredentials: true, // Important to include credentials for cookies
  });
  const response = await api.post(
    "/api/register",
    {
      name,
      email,
      password,
      password_confirmation: password,
    },
    {
      headers: {
        Accept: "application/json",
      },
      withCredentials: true,
      withXSRFToken: true,
    }
  );
  return response.data;
};

export const login = async (email, password) => {
  await api.get(`/sanctum/csrf-cookie`, {
    withCredentials: true, // Important to include credentials for cookies
  });

  try {
    const response = await api.post(
      "/api/login",
      {email , password},
      {
        headers: { Accept: "application/json" },
        withCredentials:true,
        withXSRFToken:true
      }
    );
    console.log(response.data)
  } catch (e) {
    console.log(3);
  }
};


export const logout = async () =>{
  try{
    const response = await api.post('/api/logout', {} , {
      headers : {
        Accept : 'application/json'
      },
      withCredentials:true,
      withXSRFToken:true
    })
  }catch(e){
    return e
  }
}