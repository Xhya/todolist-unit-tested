import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./todolist.scss";
import { useAppDispatch } from "../store/store.config";
import { selectTodolist } from "../store/todolist.selector";
import { todoAddedAction } from "../store/todolist.actions";
import { TodoItem } from "../store/todolist.reducer";
import { addItem } from "../store/todolist.dispatcher";

function Todolist() {
  const dispatch = useAppDispatch();
  const list = useSelector(selectTodolist);
  const [input, setInput] = useState("");

  // async function fetchData() {
  //   const data = await (
  //     await fetch(
  //       "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
  //     )
  //   ).json();
  // }

  // useEffect(() => {
  //   // fetchData();
  // }, [fetchData]);

  const onClickValidate = async () => {
    if (input) {
      dispatch(addItem(input));
      setInput("");
    }
  };

  const Todo = () => {
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
        <div className="list">{Todo()}</div>
      </div>
    </div>
  );
}

export default Todolist;
