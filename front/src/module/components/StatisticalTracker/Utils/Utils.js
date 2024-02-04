const backendUrl = "http://localhost:3000";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const checkCPD= async (patient_id,date,oldData,newData,feature)=>{
  try{
    oldData.pop();
    const newApiEndpoint = `${backendUrl}/cpd`;
    const res = await axios.post(newApiEndpoint, {
        oldData: oldData,
        newData: newData,
        feature: feature,
        date:date,
        patient_id : patient_id
    });
    return res;
  }catch(error){
    console.log(error)
  }
}

export const EmergencyToastMessage = async (type, message,time=3000,toastId=null) => {
  try{
    await toast[type](message,{
      position: "top-center", 
      style: {
         marginTop: '25vh',
        width: '500px',
        height: '500px',
      },
      autoClose: time,
      toastId: toastId,
  });}catch(error){
    console.log(error)
  }
  };