import { TodoItem } from "./todolist.reducer";

export const accessList: (list: any) => TodoItem[] = (list) => Object.values(list);

export const selectTodolist = (state: any) => {
  return accessList(state.todolist);
};
