import Item from "./item";
import { useState } from "react";

let FoodItem = ({ items }) => {

  let [activeitems,setActiceItems]= useState([]);

  let onBuyButton=(items,event)=>{
    let newItems=[...activeitems,items];
    setActiceItems(newItems);

  }

  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          fooditems={items}
          bought={activeitems.includes(items)}
          handlebuybutton={(event)=>onBuyButton(items,event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItem;
