import React from "react";


// components
// import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "../components/CathegoriesSlider/CategoriesSlider";
import SearchSection from "../components/SearchSection/SearchSection";

// import MenuBtn from "../components/MenuBtn/MenuBtn";
function Home() {
  return (
    <div className="container-fluid">
      <SearchSection />
      <CategorieSlider />
    </div>
  );
}

export default Home;
