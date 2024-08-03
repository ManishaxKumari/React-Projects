function ToDoItem() {

  let TodoName='Buy milk';
  let TodoDate='12/10/24';

  
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
