import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebserviceMock implements TodolistWebserviceInterface {
  private _list = [
    {
      id: 0,
      text: "Salade",
      completed: false,
    },
  ];

  getList(): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }
}
