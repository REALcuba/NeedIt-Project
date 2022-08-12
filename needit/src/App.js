import logo from "./img/NeedIt.gif";
import "./App.css";


// components
import Header from "./components/header/Header.jsx";
import MainBanner from "./components/MainBanner/MainBanner";
function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      {/* <footer/> */}
    </div>
  );
}

export default App;
