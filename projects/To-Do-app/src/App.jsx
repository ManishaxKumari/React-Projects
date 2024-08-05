import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import  "./App.css";
import Todoitems from "./components/todoitems";
import { useState } from "react";
function App() {
  const itodoitems=[
  {
    name:'buy milk',
    duedate:'4/10/23',
  },
  {
    name:'buy milk',
    duedate:'4/10/23',
  },
  {
    name:'buy milk',
    duedate:'4/10/23',
  }
]

const [todoitems,settodoitems]=useState(itodoitems);

const handleNewItem =(itemName,ItemDueDate){

}

  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <Todoitems todoitems={todoitems}></Todoitems>
      
    </center>
  );
}

export default App;
