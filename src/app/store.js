import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import appReducer from "../redux/appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
