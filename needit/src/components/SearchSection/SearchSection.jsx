import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./searchSection.css";

function SearchSection() {
  return (
    <div className="searchSection">
      <h1>NEED IT</h1>
      <p>
        Give away things that you don't need <br></br>for those who need it
      </p>
      <SearchBar />
    </div>
  );
}

export default SearchSection;
