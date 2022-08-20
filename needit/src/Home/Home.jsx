import React from "react";


// components
// import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "../components/CathegoriesSlider/CategoriesSlider";
import SearchSection from "../components/SearchSection/SearchSection";

function Home() {
  return (
    <div className="home">
      <SearchSection />
      <CategorieSlider />
    </div>
  );
}

export default Home;
