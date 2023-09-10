import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebserviceMock implements TodolistWebserviceInterface {
  private _id = 0;
  private _list = [
    {
      id: this._id,
      text: "Salade",
      completed: false,
    },
  ];

  getList(): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }

  // addItem(itemValue: string): Promise<void> {
  //   return new Promise((resolve) => {
  //     this._id += 1
  //     this._list.push({
  //       id: this._id,
  //       text: itemValue,
  //       completed: false,
  //     });
  //     setTimeout(() => resolve(), 500);
  //   });
  // }
}
