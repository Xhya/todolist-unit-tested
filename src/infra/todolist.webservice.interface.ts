export type TodoItem = {
  text: string;
  completed: boolean;
  id: number;
};
export type Todo = TodoItem[];

export interface TodolistWebserviceInterface {
  getList: () => Promise<Todo>;
}
