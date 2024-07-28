import Item from "./item";

let FoodItem = ({items}) => {
   
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} fooditems={items} handlebuybutton={()=>{
          console.log(`${items} are clicked`)
        }}></Item>))}
    </ul>
  );
};
export default FoodItem;
