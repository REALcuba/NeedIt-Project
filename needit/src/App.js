import logo from "./img/NeedIt.gif";
import "./App.css";

// components
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/ProductSlider/ProductSlider";
import TestCarousel from "./components/CathegoriesSlider/CathegoriesSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Carousel />
        <TestCarousel />
      </header>
      {/* <footer/> */}
    </div>
  );
}

export default App;
