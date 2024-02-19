import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { isLoading } = appSlice.actions;

export default appSlice.reducer;
