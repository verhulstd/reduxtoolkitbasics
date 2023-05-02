import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 16,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    setValue: (state, { payload }) => {
      state.counter = payload;
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement, reset, setValue } = counterSlice.actions;
