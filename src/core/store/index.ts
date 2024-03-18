import { configureStore } from '@reduxjs/toolkit';
import quizeSlice from './quizeSlice';

export const store = configureStore({
  reducer: {
    quize: quizeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
