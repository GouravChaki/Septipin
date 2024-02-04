import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalstorage";
import axios from "axios";
import qs from "qs";
import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";

const AuthContext = createContext();
const backendUrl = "http://localhost:3000";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [email, setEmail] = useLocalStorage("email", null);
  const [patientId, setPatientId] = useState("");
  const [profileStatus, setProfileStatus] = useState(false);
  const [stats, setStats] = useState(null);
  const [severity, setSeverity] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    //profile fetch api will be called here
    const xyz = async () => {
      await Profile("/");
    };
      if (user) {
      xyz();
    } else {
      navigate("/login");
    }
  }, []);

  // useEffect(() => {
  //   const xyz = async (url) => {
  //    await Profile(url)
  //   };

  //   const url = location.pathname;
  //   xyz(url);

  // }, [location]);

  const login = async ({ email, password }) => {
    try {
      let data = {
        email: email,
        password: password,
      };
      const apiEndpoint = `${backendUrl}/login`;
      const res = await axios.post(apiEndpoint, data);
      if (res.data?.success) {
        setUser(res.data?.account?.token || null);
        setEmail(email);
        setPatientId(res.data?.account?._id);
        setProfileStatus(res.data?.account?.profile_status);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async ({ email, password }) => {
    try {
      let data = {
        email: email,
        password: password,
      };
      const apiEndpoint = `${backendUrl}/signup`;
      const res = await axios.post(apiEndpoint, data);
      if (res.data?.success == true) {
        setUser(res.data?.data.token);
        setEmail(email);
        setPatientId(res.data?.data._id);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    window.localStorage.setItem("user", null);
    window.localStorage.setItem("email", null);
    navigate("/login");
  };

  const Profile = async (url) => {
    try {
      const apiEndpoint = `${backendUrl}/profile_fetch`;
      const res = await axios.post(apiEndpoint, { email: email });
      console.log(res.data);
      if (res.data.success) {
        setProfileStatus(res.data?.data?.patient.profile_status);
        setPatientId(res.data?.data?.patient._id);
        setStats(res.data?.data?.disease.disease);
        setSeverity(res.data?.data?.disease.severity);
        if (res.data?.data?.patient.profile_status == false) {
          navigate("/profile");
        } else {
          navigate(url);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = useMemo(
    () => ({
      isLoggedIn:
        (user !== null && email !== null) ||
        (window.localStorage.getItem("user") &&
          window.localStorage.getItem("email")),
      user,
      login,
      signup,
      logout,
      Profile,
      patientId,
      profileStatus,
      stats,
      severity,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
