import React from "react";
import Todolist from "./ui/Todolist";
import { Provider } from "react-redux";
import { store } from "./store/store.config";

function App() {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
}

export default App;
