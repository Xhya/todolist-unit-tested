import {
  setTodolistAction
} from "../store/todolist.actions";
import { ThunkResult } from "./store.config";
import { todoAdded } from "./todolist.reducer";

export const refreshTodolist =
  (): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistWebservice }) => {
    const todolist = await todolistWebservice.getList();
    dispatch(setTodolistAction({ todolist }));
  };

export const addItem =
  (itemValue: string): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistWebservice }) => {
    await todolistWebservice.addItem(itemValue);
    dispatch(todoAdded(itemValue));
  };
