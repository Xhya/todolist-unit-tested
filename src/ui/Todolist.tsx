import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./todolist.scss";
import { useAppDispatch } from "../store/store.config";
import { selectTodolist } from "../store/todolist.selector";
import { todoAddedAction } from "../store/todolist.actions";
import { TodoItem } from "../store/todolist.reducer";
import { addItem, refreshTodolist } from "../store/todolist.dispatcher";

function Todolist() {
  const dispatch = useAppDispatch();
  const list = useSelector(selectTodolist);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      dispatch(refreshTodolist());
    }

    fetchData();
  }, [dispatch]);

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
