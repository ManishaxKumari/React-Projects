import Item from "./item";

let FoodItem = ({items}) => {
   
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} fooditems={items}></Item>))}
    </ul>
  );
};
export default FoodItem;
