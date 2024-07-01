import "./App.css";
import FoodItem from "./component/fooditem";
import Error from "./component/errormessage";

function App() {
  let fooditems=["Dal","sabji","golgappa","carrot","allu"];
  return (
  <>
    <h1>healthy food</h1>
    <Error items={fooditems}></Error>
    <FoodItem items={fooditems}></FoodItem>
      
    </>
  );
}

export default App;
