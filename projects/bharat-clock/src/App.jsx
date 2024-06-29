import "./App.css";
import NameHeader from "./components/NameHeader";
import Content from "./components/content";
import Clock from "./components/clock";

function App() {
  
    return <div className="text-center">
      <NameHeader></NameHeader>
      <Content></Content>
      <Clock></Clock>
    </div>
  
}
export default App;
