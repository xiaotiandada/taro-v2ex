import { IThreadProps } from "@/components/thread";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThreadState {
  currentThread?: IThreadProps;
}

const initialState: ThreadState = {
  currentThread: undefined,
};

export const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    setCurrentThread: (state, action: PayloadAction<IThreadProps>) => {
      state.currentThread = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentThread } = threadSlice.actions;

export default threadSlice.reducer;
