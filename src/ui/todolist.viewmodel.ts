import { selectTodolist } from "../store/todolist.selector";

const TodoViewModel = {
  list: selectTodolist,
};

export default TodoViewModel;
