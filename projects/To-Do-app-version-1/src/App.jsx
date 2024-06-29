import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDo_item";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItem />
      <ToDoItem />
    </center>
  );
}

export default App;
