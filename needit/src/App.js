import logo from "./img/globe-recycling-icon-recycling-earth.png";
import "./App.css";
import Header from "../src/components/header/Header";

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
      </header>
    </div>
  );
}

export default App;
