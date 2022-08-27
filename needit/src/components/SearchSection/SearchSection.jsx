import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import dataSlider from "../ProductSlider/Slider/dataSlider";

import "./searchSection.css";

function SearchSection() {
  return (
    <div className="searchSection">
      <h1>NEED IT</h1>
      <p>
        Give away things that you don't need <br></br>for those who need it
      </p>
      <SearchBar placeholder="Search here..." data={dataSlider}/>
    </div>
  );
}

export default SearchSection;
