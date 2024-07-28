
import FoodItem from "./component/fooditem";
import Error from "./component/errormessage";
import Container from "./component/container";
import Foodinput from "./component/foodinput";

function App() {
  let fooditems=["Dal","sabji","golgappa","carrot","allu"];
  return (
  <>
  <Container>
    <h1 className="heading">healthy food</h1>
    <Error items={fooditems}></Error>
    <Foodinput></Foodinput>
    <FoodItem items={fooditems}></FoodItem>
    </Container>
    
      
    </>
  );
}

export default App;
