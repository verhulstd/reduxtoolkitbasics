import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: nanoid(),
      name: "Gras afrijden",
      checked: false,
    },
    {
      id: nanoid(),
      name: "TV kijken",
      checked: false,
    },
    {
      id: nanoid(),
      name: "De afwas doen",
      checked: true,
    },
  ],
  reducers: {
    addTodo(state, { type, payload }) {
      state.push({
        id: nanoid(),
        checked: false,
        name: payload,
      });
    },
    removeTodo(state, { payload }) {
      const i = state.findIndex((f) => f.id === payload);
      state.splice(i, 1);
    },
    toggleTodo(state, { payload }) {
      const foundTodo = state.find((f) => f.id === payload);
      foundTodo.checked = !foundTodo.checked;
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
