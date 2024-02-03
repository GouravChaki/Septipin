import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToastMessage = async (type, message,time=1000,toastId=null) => {
  await toast[type](message,{
    position: "top-center", 
    autoClose: time,
    toastId: toastId,
  });
};