import FoodItem from "./component/fooditem";
import Error from "./component/errormessage";
import Container from "./component/container";
import Foodinput from "./component/foodinput";
import { useState } from "react";

function App() {
  // let textstateArr= useState("Food item Entered by user");
  // let texttoshow=textstateArr[0];
  // let setTextState=textstateArr[1];
  //let [texttoshow,setTextState]=useState();

  let [fooditems, setfooditems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value="";
      let newitems= [...fooditems,newFoodItem];
      setfooditems(newitems);
    }
   
  };
  return (
    <>
      <Container>
        <h1 className="heading">healthy food</h1>
        <Foodinput handleonKeyDown={onKeyDown}></Foodinput>
        <Error items={fooditems}></Error>
        <FoodItem items={fooditems}></FoodItem>
      </Container>
    </>
  );
}

export default App;
