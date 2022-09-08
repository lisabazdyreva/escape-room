import { configureStore } from '@reduxjs/toolkit';
import questsReducer from './app-slicer';


export const store = configureStore({
  reducer: questsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
