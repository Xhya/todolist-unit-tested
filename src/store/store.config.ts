import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TodolistSlice } from "./todolist.reducer";

export const createStore = () =>
  configureStore({
    reducer: { todolist: TodolistSlice.reducer },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
