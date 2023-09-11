import { TodolistWebserviceInterface } from "../infra/todolist.webservice.interface";
import { TodolistWebserviceMock } from "../infra/todolist.webservice.mock";
import TodoViewModel from "../ui/todolist.viewmodel";
import { ReduxStore, RootState, createStore } from "./store.config";
import { addItem, refreshTodolist } from "./todolist.dispatcher";

describe("todolist tests", () => {
  let store: ReduxStore;
  let todolistWebserviceMock: TodolistWebserviceInterface;
  let initialState: RootState;

  beforeEach(() => {
    todolistWebserviceMock = new TodolistWebserviceMock();
    store = createStore({ todolistWebservice: todolistWebserviceMock });
    initialState = store.getState();
  });

  it.skip("should get todolist", async () => {
    await store.dispatch(refreshTodolist());
    expect(getItemValueList()).toEqual(["Tomate"]);
  });

  it.skip("should add item", async () => {
    await store.dispatch(addItem("Salade"));
    expect(getItemValueList()).toEqual(["Salade"]);
    await store.dispatch(addItem("Tomate"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate"]);
    await store.dispatch(addItem("Oignon"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate", "Oignon"]);
  });

  const getItemValueList = () =>
    TodoViewModel.list(store.getState()).map((item) => item.text);
});
