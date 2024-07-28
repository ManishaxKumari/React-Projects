
import FoodItem from "./component/fooditem";
import Error from "./component/errormessage";
import Container from "./component/container";
import Foodinput from "./component/foodinput";

function App() {
  let fooditems=["Dal","sabji","golgappa","carrot","allu"];
  
  const handleOnChange=(event)=>{
    console.log(event.target.value);
}
  return (
  <>
  <Container>
    <h1 className="heading">healthy food</h1>
    <Error items={fooditems}></Error>
    <Foodinput handleOnChange={handleOnChange} ></Foodinput>
    <FoodItem items={fooditems}></FoodItem>
    </Container>
    
      
    </>
  );
}

export default App;
