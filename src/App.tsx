import logo from "./logo.svg";
import "./App.css";
import { AddTodoList } from "./client/AddTodoList";
import { ResetDatabaseButton } from "./client/ResetDatabaseButton";
import { TodoLists } from "./client/TodoLists";

function App() {
  return (
    <div className="App">
      <TodoLists />
      <AddTodoList />
      <ResetDatabaseButton />
    </div>
  );
}

export default App;
