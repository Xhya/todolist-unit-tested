import { Todo } from "../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebservice implements TodolistWebserviceInterface {
  async getList(): Promise<Todo> {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json
  }
}
