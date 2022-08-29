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
  console.log(searchWord);
  const newFilter = dataSlider.filter((value)=>{
    return value.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  
  if(searchWord === filteredData){
    setFilteredData([])
  }else {
    setFilteredData(newFilter)
    
}

  
}
const handleClick =()=>{ 
  // const searchWord = event.target.value;
  // const newFilter = dataSlider.filter((value)=>{
  //   value.name.toLowerCase().includes(searchWord.toLowerCase());
  // });
  <ul>

{dataSlider.map(data =>{
 console.log(data.name);
 return <li className="container-sm "key={data.id}>
 { data.name
 }
 </li>
  
}

)
}
</ul>
console.log(data.name);
  
  // if (data.includes(newFilter)){

  // }
}
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
           onClick={handleClick} 
           />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
