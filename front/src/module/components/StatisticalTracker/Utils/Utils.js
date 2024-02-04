const backendUrl = "http://localhost:3000";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const checkCPD= async (oldData,newData,feature)=>{
    oldData.pop();
    console.log(oldData,newData,feature)
    const newApiEndpoint = `${backendUrl}/cpd`;
    const res = await axios.post(newApiEndpoint, {
        oldData: oldData,
        newData: newData,
        feature: feature
    });
    console.log(res.data);
}

export const EmergencyToastMessage = async (type, message,time=10000,toastId=null) => {
    await toast[type](message,{
      position: "top-center", 
      style: {
        width: '400px',
        height: '200px',
      },
      autoClose: time,
      toastId: toastId,
  });
  };