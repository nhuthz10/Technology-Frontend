import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  userInfor: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleChangeAccessToken: (state, actions) => {
      state.access_token = actions.payload;
    },
    handleChangeUserInfor: (state, actions) => {
      state.userInfor = actions.payload;
    },
  },
});

export const { handleChangeAccessToken, handleChangeUserInfor } =
  userSlice.actions;

export default userSlice.reducer;
