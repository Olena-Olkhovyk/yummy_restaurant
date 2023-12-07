import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Sliders from "./Components/Slider/Sliders";
import Items from "./Components/Items/Items";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Sliders />
      <Items />
    </div>
  );
}

export default App;
