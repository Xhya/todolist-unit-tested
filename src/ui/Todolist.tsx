import { useSelector } from "react-redux";
import { useState } from "react";
import "./todolist.scss";


function Todolist() {
  // const dispatch = useAppDispatch();
  // const list = useSelector(selectTodolist);

  const [list, setList] = useState([{id: 1, text: "Tomate"}]);
  const [input, setInput] = useState("");

  const onClickValidate = async () => {
    if (input) {
      //dispatch(todoAddedAction(input));
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
        <div className="list">
          {list.map((item) => (
            <div className="item" key={item.id}>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;