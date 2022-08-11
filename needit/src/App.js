import logo from "./img/NeedIt.gif";
import "./App.css";


// components
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/ProductSlider/ProductSlider";
import TestCarousel from "./components/CathegoriesSlider/CathegoriesSlider";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <section className="body-product">
          <img src={logo} className="App-logo" alt="logo" />

          <Carousel />
        </section>
        <TestCarousel />
      </body>
      {/* <footer/> */}
    </div>
  );
}

export default App;
