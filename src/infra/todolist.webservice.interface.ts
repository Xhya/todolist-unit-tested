import { Todo } from "../store/todolist.reducer";

export interface TodolistWebserviceInterface {
  getList: () => Promise<Todo>;
}
