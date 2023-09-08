import { createSlice } from "@reduxjs/toolkit";
import { accessList } from "./todolist.selector";

export type TodoItem = {
  text: string;
  completed: boolean;
  id: number;
};
export type Todo ={ [id: string]: TodoItem };

const initialState: Todo ={ 0: { text: 'Use Redux', completed: false, id: 0 } };

export const TodolistSlice = createSlice({
  name: "Todolist",
  initialState: initialState,
  reducers: {
    setTodolist(_, action) {
      return action.payload;
    },
    todoAdded(state, action) {
      const id =
        accessList(state).reduce(
          (maxId, todo) => Math.max(todo.id, maxId),
          -1
        ) + 1;

      state[id] = ({
        id: id,
        completed: false,
        text: action.payload,
      });
    },
  },
});

export default TodolistSlice.reducer;
export const { todoAdded } = TodolistSlice.actions;
