import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userInfor: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleChangeUserInfor: (state, actions) => {
      state.userInfor = actions.payload;
    },
    handleChangeLogin: (state, actions) => {
      state.isLogin = actions.payload;
    },
  },
});

export const { handleChangeUserInfor, handleChangeLogin } = userSlice.actions;

export default userSlice.reducer;
