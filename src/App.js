import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Menu />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
}

export default App;
