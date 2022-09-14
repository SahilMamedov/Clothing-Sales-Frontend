import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";

interface initialStateTypes {
  user: IUser;
}
const initialState: initialStateTypes = {
  user: {
    Name: "",
    Surname: "",
    Email: "",
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
    },
    logoutUser: (state) => {
      state.user.Email = "";
      state.user.Name = "";
      state.user.Surname = "";
    },
  },
});
export const { authUser } = userSlice.actions;
export default userSlice.reducer;
