import { TodolistWebserviceInterface } from "../infra/todolist.webservice.interface";
import {
  setTodolistAction
} from "../store/todolist.actions";
import { ThunkResult } from "./store.config";
import { todoAdded } from "./todolist.reducer";

export const refreshTodolist =
  (webservice: TodolistWebserviceInterface): ThunkResult<Promise<void>> =>
  async (dispatch, getState, _) => {
    const todolist = await webservice.getList();
    dispatch(setTodolistAction(todolist));
  };

export const addItem =
  (itemValue: string): ThunkResult<Promise<void>> =>
  async (dispatch, getState, _) => {
    dispatch(todoAdded(itemValue));
  };
