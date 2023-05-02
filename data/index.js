import { configureStore } from "@reduxjs/toolkit";
import todos from "./todosSlice";
export default configureStore({
  reducer: {
    todos,
  },
  devTools: true,
});
