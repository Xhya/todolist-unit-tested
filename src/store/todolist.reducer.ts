import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      addItem(state, action.payload)
    },
  },
});

export default TodolistSlice.reducer;
export const { todoAdded } = TodolistSlice.actions;

function addItem(state, payload) {
  if (Array.isArray(state)) {
    const id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
    state.push({
      id: id,
      completed: false,
      text: payload,
    });
  } else {
    const id = state.length + 1;
    state[id] = {
      id: id,
      completed: false,
      text: payload,
    };
  }
}