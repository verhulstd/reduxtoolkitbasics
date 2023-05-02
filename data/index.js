import { configureStore } from "@reduxjs/toolkit";
import todos from "./todosSlice";
import counter from "./counterSlice";
import friendsApi from "./friendsApi";
export default configureStore({
  reducer: {
    todos,
    counter,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  devTools: true,
});
