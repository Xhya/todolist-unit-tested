import { Todo } from "./todolist.reducer";

export const selectTodolist = (state: Todo) => {
  return state.todolist;
};
