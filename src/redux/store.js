import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  ...persistCommonConfig,
  key: "user",
  whitelist: ["userInfor", "isLogin"],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userSlice),
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
