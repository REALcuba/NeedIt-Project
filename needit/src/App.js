// import logo from "./img/NeedIt.gif";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/Register";
import Login from "./components/Login/Login";
// components
import Header from "./components/Header/Header.jsx";
import Home from "./Home/Home";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
// import CategorieSlider from "./components/CathegoriesSlider/CategoriesSlider";
// import SearchSection from "./components/SearchSection/SearchSection";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;
