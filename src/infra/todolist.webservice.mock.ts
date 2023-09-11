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

  getList(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }
}
