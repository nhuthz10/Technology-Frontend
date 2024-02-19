import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./userSlice";
import appSlice from "./appSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appSlice,
  },
});
