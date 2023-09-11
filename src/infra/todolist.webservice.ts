import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebservice implements TodolistWebserviceInterface {
  async getList(): Promise<any> {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json.todos
  }

  // addItem(itemValue: string): Promise<void> {
  //   return new Promise((resolve) => {
  //     const data = localStorage.getItem("json");

  //     const json = JSON.parse(data);

  //     this._id += 1;
  //     const newItem = {
  //       id: this._id,
  //       text: itemValue,
  //       completed: false,
  //     }

  //     if (json !== null) {
  //       json.push(newItem);
  //       localStorage.setItem("json", JSON.stringify(json));
  //     } else {
  //       localStorage.setItem("json", JSON.stringify([newItem]));
  //     }

  //     resolve();
  //   });
  // }
}
