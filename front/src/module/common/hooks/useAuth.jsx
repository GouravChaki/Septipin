import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalstorage";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useLocalStorage("user", null);
  const [email, setEmail] = useLocalStorage("email", null);
  const [patientId , setPatientId] = useState('')
  const [profileStatus , setProfileStatus] = useState(false)
  const [stats , setStats] = useState(null)
  const [severity , setSeverity] = useState(null)
  useEffect(()=>{
    //profile fetch api will be called here
    const xyz=async ()=>{
      await fetch()
    }
    if(user || window.localStorage.getItem("user")){
    xyz()
    }else{
      navigate("/login")
    }
  },[])
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
        data: "Life",
        success:true,
        profile:true
      }
    } 
      axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.data?.success == true){
          setUser(response.data?.account?.token || null);
          setEmail(email)
          setPatientId(response.data?.account?._id)
          setProfileStatus(response.data?.account?.profile_status)
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
        setEmail(email || null);
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

  const Profile= async ()=>{
      let data = qs.stringify({
        email: email
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
          data: "Life",
          success:true,
          profile:true
        }
      } 
        axios
        .request(config)
        .then((response) => {
          if(response.data?.success == true){
             setProfileStatus(response.data.data.patient.profile_status)
             setPatientId(response.data.data.patient._id)
             setStats(response.data.data.disease.disease)
             setSeverity(response.data.data.disease.severity)
             if(response.data.data.patient.profile_status==false){
              navigate("/profile")
             }else{
              navigate("/")
             }
            }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  const value = useMemo(
    () => ({
      isLoggedIn: ((user !== null && email!== null) || (window.localStorage.getItem("user") && window.localStorage.getItem("email"))),
      user,
      login,
      signup,
      logout,
      Profile,
      patientId,
      profileStatus,
      stats,
      severity
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
