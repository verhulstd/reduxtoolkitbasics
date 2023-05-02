import { configureStore } from "@reduxjs/toolkit";
import todos from "./todosSlice";
import counter from "./counterSlice";
export default configureStore({
  reducer: {
    todos,
    counter,
  },
  devTools: true,
});
