import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "./useLocalstorage";
import axios from "axios";
import qs from "qs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  useEffect(()=>{
    api()
  },[])
   const api=()=>{
    console.log('hello');
    //backend details
   }
    const login = async ({ email, password }) => {
    let data = qs.stringify({
      email: email,
      password: password,
    });
             
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BASE_URL}/patientLogin`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    let res  = {
      data:{
        data: "Life's Good",
        success:true,
        profile:true
      }
    } 
      axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.data?.success == true){
          setUser(response.data?.data || null);
          console.log(window.localStorage.getItem("user"));
          }
        res = response;
      })
      .catch((error) => {
        console.log(error);
      });
      return res
  };

  const signup = async ({ firstName, lastName, email, password }) => {
    let data = qs.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BASE_URL}/patientSignup`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    let res
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.data?.success == true){
        setUser(response.data?.data || null);
        }
        res = response;
      })
      .catch((error) => {
        console.log(error);
      });
      return res
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    window.localStorage.setItem("user",null)
    navigate("/");
  };

  const value = useMemo(
    () => ({
      isLoggedIn: ((user !== null) || (window.localStorage.getItem("user"))),
      user,
      login,
      signup,
      logout,
      api
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
