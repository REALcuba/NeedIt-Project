import React from "react";
import { useState } from "react";

//style
import "./searchBar.css";
import dataSlider from "../ProductSlider/Slider/dataSlider";
// import { Link } from "react-router-dom";

function Searchbar({ placeholder, props }) {
  const [search, setsearch] = useState("");
  const [dataList, setDataList] = useState(dataSlider);

  const handleFilter = (e) => {
    e.prevent.default();
    const searchWord = e.target.value;

    setsearch(searchWord);
  };
  const handleClick = (props) => {
    const newFilter = dataSlider.filter((value) => {
      if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return (
          <div background-color="white">
            {dataList.map((data) => (
              <ul>
                <li>{data.name}</li>
              </ul>
            ))}
          </div>
        );
      }

      return 
      
    });

    setDataList(newFilter);
  };
  return (
    <>
      <div>
        <div className="searchBarDiv container d-flex  ">
          <div className="searchBarWrapper d-flex flex-grow-1 align-items-center">
            <input
              className="searchBar flex-fill"
              type="search"
              placeholder={placeholder}
              onChange={handleFilter}
            />
            <input
              type="submit"
              className="searchBarBtn Btn"
              value="search "
              onClick={handleClick}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Searchbar;
