import { IUser } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialUserTypes {
  user: IUser;
}
const initialState: initialUserTypes = {
  user: {
    nameid: "",
    Name: "",
    Email: "",
    Surname: "",
    IsOnline: false,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<IUser>) => {
      state.user.Name = action.payload.Name;
      state.user.Surname = action.payload.Surname;
      state.user.Email = action.payload.Email;
      state.user.nameid = action.payload.nameid;
      state.user.IsOnline = true;
    },
    logoutUser: (state) => {
      state.user = { IsOnline: false } as IUser;
    },
  },
});
export const { authUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
