import React from "react";

//style
import "./searchBar.css";

function Searchbar() {
  return (
    <div>
      <div className="searchBarDiv">
        <div className="searchBarWrapper">
          <input
            className="searchBar"
            type="text"
            placeholder="Search here..."
          />
          <input type="submit" className="searchBarBtn Btn" value="search " />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
