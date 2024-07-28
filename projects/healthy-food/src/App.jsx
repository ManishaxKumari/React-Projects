
import FoodItem from "./component/fooditem";
import Error from "./component/errormessage";
import Container from "./component/container";

function App() {
  let fooditems=["Dal","sabji","golgappa","carrot","allu"];
  return (
  <>
  <Container>
    <h1 className="heading">healthy food</h1>
    <Error items={fooditems}></Error>
    <FoodItem items={fooditems}></FoodItem>
    </Container>
    <Container>hello</Container>
      
    </>
  );
}

export default App;
