import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebserviceMock implements TodolistWebserviceInterface {
  private _list = {
    0: {
      id: 0,
      text: "Salade",
      completed: false,
    },
  };

  getList(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }
}
