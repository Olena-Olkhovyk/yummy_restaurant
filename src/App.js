import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Sliders from "./Components/Slider/Sliders";
import Items from "./Components/Items/Items";
import Delivery from "./Components/Delivery/Delivery";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Sliders />
      <Items />
      <Delivery />
    </div>
  );
}

export default App;
