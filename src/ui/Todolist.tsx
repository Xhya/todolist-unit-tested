/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./todolist.scss";
import { useAppDispatch } from "../store/store.config";
import { selectTodolist } from "../store/todolist.selector";
import { TodoItem } from "../store/todolist.reducer";
import { addItem, refreshTodolist } from "../store/todolist.dispatcher";
import { TodolistWebserviceInterface } from "../infra/todolist.webservice.interface";
import { setTodolistAction } from "../store/todolist.actions";

function Todolist() {
  const dispatch = useAppDispatch();
  const list = useSelector(selectTodolist);
  const [input, setInput] = useState("");

  async function fetchData() {
    const response = await fetch("./data.json");
    const json = await response.json();
    dispatch(setTodolistAction(json));
  }

  useEffect(() => {
    // fetchData();
  }, [dispatch, fetchData]);

  const onClickValidate = async () => {
    if (input) {
      dispatch(addItem(input));
      setInput("");
    }
  };

  return (
    <div className="container">
      <div className="todolist">
        <div className="todo-edition">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={onClickValidate}>Ajouter</button>
        </div>
        <div className="list">{Todo(list)}</div>
      </div>
    </div>
  );
}

export default Todolist;

const Todo = (list) => {
  if (Array.isArray(list)) {
    return list.map((item) => (
      <div className="item" key={item.id}>
        <div>{item.text}</div>
      </div>
    ));
  } else {
    return Object.values(list).map((item: TodoItem) => (
      <div className="item" key={item.id}>
        <div>{item.text}</div>
      </div>
    ));
  }
};
