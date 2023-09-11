import React from "react";
import { render, screen } from "@testing-library/react";
import Todolist from "./Todolist";
import { TodoItem } from "../store/todolist.reducer";
import { Provider } from "react-redux";
import { store } from "../store/store.config";

// const todolistWebservice = new TodolistWebserviceMock();

describe("Todolist Component", () => {
  it.skip("displays initial list", async () => {
    const fakeTodo = [{ id: 0, text: "Salade", completed: false } as TodoItem];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeTodo),
      } as Response)
    );

    render(
      <Provider store={store}>
        <Todolist />
      </Provider>
    );
    expect(await screen.findByText("Salade")).toBeInTheDocument();
  });
});
