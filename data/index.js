import { configureStore } from "@reduxjs/toolkit";
import todos from "./todosSlice";
import counter from "./counterSlice";
import friendsApi from "./friendsApi";
import landscapesApi from "./landscapesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    todos,
    counter,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [landscapesApi.reducerPath]: landscapesApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      friendsApi.middleware,
      landscapesApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
