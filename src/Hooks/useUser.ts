import { useEffect } from "react";
import decode from "jwt-decode";
import { IUser } from "types";
import { authUser } from "Redux/slices/userSlice";
import { useAppDispatch } from "../Redux/hooks/hooks";

export const useUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodeUser = decode<IUser>(token);
     console.log(decodeUser,"decodeuser");
     
      dispatch(authUser(decodeUser));
    }
  }, []);
};
