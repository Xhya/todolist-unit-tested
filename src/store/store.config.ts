import { Action, Store, ThunkAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Todo, TodolistSlice } from "./todolist.reducer";
import { TodolistWebserviceInterface } from "../infra/todolist.webservice.interface";
import { TodolistWebservice } from "../infra/todolist.webservice";

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: { todolist: TodolistSlice.reducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { todolistWebservice: dependencies.todolistWebservice },
      },
    }),
  });

export const store = createStore({ todolistWebservice: new TodolistWebservice() });

export interface RootState {
  todolist: Todo;
}

export interface Dependencies {
  todolistWebservice: TodolistWebserviceInterface;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type ThunkResult<R> = ThunkAction<R, RootState, Dependencies, Action>;
export type ReduxStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, Dependencies, Action>;
};
