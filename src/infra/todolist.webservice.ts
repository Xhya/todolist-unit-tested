import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebservice implements TodolistWebserviceInterface {
  async getList(): Promise<any> {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json.todos
  }
}
