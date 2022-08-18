// import logo from "./img/NeedIt.gif";
import "./App.css";

import Header from "./components/header/Header";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
// components
import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "./components/CathegoriesSlider/CategoriesSlider";
import SearchSection from "./components/SearchSection/SearchSection";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/app' exact element={<App/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      <SearchSection />
      <CategorieSlider />
      <Footer />
     
      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;
