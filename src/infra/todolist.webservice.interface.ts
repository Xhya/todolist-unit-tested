import { Todo } from "../store/todolist.reducer";

export interface TodolistWebserviceInterface {
  getList: () => Promise<any>;
  // addItem: (itemValue: string) => Promise<void>;
}
