import { TodolistSlice } from "./todolist.reducer";

export const { setTodolist: setTodolistAction, todoAdded: todoAddedAction } =
  TodolistSlice.actions;
