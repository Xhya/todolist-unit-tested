import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUtils } from "../utils";

export type TodoItem = {
  text: string;
  completed: boolean;
  id: number;
};
export type Todo = TodoItem[];

const initialState: Todo = [ { text: 'Use Redux', completed: false, id: 0 } ];

export const TodolistSlice = createSlice({
  name: "Todolist",
  initialState: initialState,
  reducers: {
    setTodolist(_, action) {
      return action.payload;
    },
    todoAdded(state: Todo, action: PayloadAction<string>) {
      addUtils(state, action.payload)
    },
  },
});

export default TodolistSlice.reducer;
export const { todoAdded } = TodolistSlice.actions;
