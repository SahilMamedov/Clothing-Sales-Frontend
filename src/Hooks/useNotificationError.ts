
import { useEffect } from "react";
import { toast,Zoom } from "react-toastify";


export const useNotificationsError = (isError: boolean, text: string) => {
console.log(text,"text");

  useEffect(() => {
    
    if(isError && text !== ''){
        toast.error(`${text}`,{
            theme:"colored",
            autoClose: 3500,
            position: "bottom-right",
            transition:Zoom,
            
          })
    }
  }, [isError]);
};