import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import threadSlice from "./thread/threadSlice";

export const store = configureStore({
  reducer: {
    thread: threadSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
