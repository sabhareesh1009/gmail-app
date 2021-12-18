import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/counter/MailSlice';

export const store = configureStore({
  reducer: {
    mail: mailSlice,
  },
});
