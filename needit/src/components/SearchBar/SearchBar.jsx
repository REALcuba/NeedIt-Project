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

if(searchWord === ""){
  setFilteredData([])
  console.log(newFilter);
}else {
  setFilteredData(newFilter)

}

}
// const handleClick =()=>{
// console.log(newFilter); 
// }

  return (
    <div>
      <div className="searchBarDiv container d-flex flex-grow-1 ">
        <div className="searchBarWrapper d-flex flex-grow-1 align-items-center">
          <input
            className="searchBar flex-fill"
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
