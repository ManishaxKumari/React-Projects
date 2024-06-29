import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDo_item";
import  "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <div class="items-container">
      <ToDoItem />
      <ToDoItem />
      </div>
    </center>
  );
}

export default App;
