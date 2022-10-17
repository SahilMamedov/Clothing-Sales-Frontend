
import { useEffect } from "react";
import { toast,Zoom } from "react-toastify";


export const useNotifications = (isSuccess: boolean, text: string) => {

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${text}`,{
        theme:"colored",
        autoClose: 3500,
        position: "bottom-right",
        transition:Zoom,
        
      })
    }
    
  }, [isSuccess]);
};