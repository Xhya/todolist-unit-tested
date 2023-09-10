import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebservice implements TodolistWebserviceInterface {
  private _id = 0;

  async getList(): Promise<Todo> {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json.todos;
  }

  addItem(itemValue: string): Promise<void> {
    return new Promise((resolve) => {
      this._id += 1
      resolve()
      // writeJsonFile("./data.json", {
      //   id: this._id,
      //   text: itemValue,
      //   completed: false,
      // });
    });
  }
}
