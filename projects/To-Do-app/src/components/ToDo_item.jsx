function ToDoItem({TodoName,TodoDate}) {
return (
    <div class="container">
      <div class="row newrow">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger mybutton">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
