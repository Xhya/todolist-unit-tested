import reducer, { todoAdded, Todo, TodoItem } from "./todolist.reducer";
import { TodolistWebserviceInterface } from "../infra/todolist.webservice.interface";
import { TodolistWebserviceMock } from "../infra/todolist.webservice.mock";
import TodoViewModel from "../ui/todolist.viewmodel";
import { ReduxStore, RootState, createStore } from "./store.config";
import { addItem, refreshTodolist } from "./todolist.dispatcher";

describe.skip("todolist tests", () => {
  let store: ReduxStore;
  let webservice: TodolistWebserviceInterface;
  let initialState: RootState;

  beforeEach(() => {
    webservice = new TodolistWebserviceMock();
    store = createStore({ todolistWebservice: webservice });
    initialState = store.getState();
  });

  it("should get todolist", async () => {
    await store.dispatch(refreshTodolist(webservice));
    expect(getItemValueList()).toEqual(["Salade"]);
  });

  it("should add item", async () => {
    await store.dispatch(refreshTodolist(webservice));
    await store.dispatch(addItem("Tomate"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate"]);
    await store.dispatch(addItem("Oignon"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate", "Oignon"]);
  });

  const getItemValueList = () =>
    Object.values(TodoViewModel.list(store.getState())).map(
      (item: TodoItem) => item.text
    );
});
