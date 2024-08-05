import ToDoItem from "./ToDo_item";
const Todoitems=({todoitems})=>{
    return(
      <div class="items-container">
        {todoitems.map(item => <ToDoItem TodoName={item.name}  TodoDate={item.duedate} />)}
      
      </div>
    )
}
export default Todoitems;