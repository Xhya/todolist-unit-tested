import { RootState } from "./store.config";
import { Todo } from "./todolist.reducer";

export const selectTodolist = (state: RootState) => {
  return state.todolist;
};
