import { TodolistWebservice } from "./infra/todolist.webservice";
import Todolist from "./ui/Todolist";

function App() {
  const webservice = new TodolistWebservice()
  return <Todolist/>;
}

export default App;
