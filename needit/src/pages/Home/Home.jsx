import React from "react";


// components
// import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import SearchSection from "../../components/SearchSection/SearchSection";
import ProductPage from "../ProductPage/ProductPage";

// import MenuBtn from "../components/MenuBtn/MenuBtn";
function Home() {
  return (
    <div className="container-fluid">
      <SearchSection />
    <ProductPage />
    </div>
  );
}

export default Home;
