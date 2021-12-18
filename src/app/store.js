import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "../features/counter/MailSlice";
import userSlice from "../features/counter/UserSlice";

export const store = configureStore({
  reducer: {
    mail: mailSlice,
    user: userSlice,
  },
});
