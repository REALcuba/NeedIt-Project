import React from "react";
import { useState } from "react";

//style
import "./searchBar.css";
import dataSlider from "../ProductSlider/Slider/dataSlider";
// import { Link } from "react-router-dom";


function Searchbar({placeholder, data}) {
const[filteredData, setFilteredData] = useState([]);

const handleFilter =(event) =>{
  const searchWord = event.target.value;
const newFilter = dataSlider.filter((value)=>{
  return value.name.toLowerCase().includes(searchWord.toLowerCase);
}
)

if(searchWord === " "){
  setFilteredData([])
}else {
  setFilteredData(newFilter)
  console.log(newFilter);

}

}
// const handleClick =()=>{
// console.log(newFilter); 
// }

  return (
    <div>
      <div className="searchBarDiv">
        <div className="searchBarWrapper">
          <input
            className="searchBar"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <input type="submit"
           className="searchBarBtn Btn" 
           value="search "
          //  onClick={()=> {
          //   console.log(newFilter);
          //  }} 
           />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
