import logo from "./img/globe-recycling-icon-recycling-earth.png";
import "./App.css";

// components
import Header from "./components/header/Header.jsx";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Need It ?
        </a>
        <Carousel />
      </header>
      {/* <footer/> */}
    </div>
  );
}

export default App;
