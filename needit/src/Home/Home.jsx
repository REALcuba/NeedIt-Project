// import logo from "./img/NeedIt.gif";
// import "./App.css";
import React from "react";
// import {Link} from "react-router-dom"


// components
// import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "../components/CathegoriesSlider/CategoriesSlider";
import SearchSection from "../components/SearchSection/SearchSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      <SearchSection />
      <CategorieSlider />
      <Footer />
     
    </div>
  );
}

export default Home;
