import React from "react";
import { useState } from "react";

//style
import "./searchBar.css";
import dataSlider from "../ProductSlider/Slider/dataSlider";
// import { Link } from "react-router-dom";

function Searchbar({ placeholder, data }) {
  const [search, setsearch] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = dataSlider.filter((value) => {
      
      return  value.name.toLowerCase().includes(searchWord.toLowerCase());
      
      
    });

    if (searchWord === newFilter) {
      setsearch(search);
    } else {
      // setFilteredData(newFilter);
      console.log(newFilter);
    }
  };
  const handleClick = (event, data) => { handleFilter(data.name)
    // const searchWord = event.target.value;
    // const newFilter = dataSlider.filter((value)=>{
    //   value.name.toLowerCase().includes(searchWord.toLowerCase());
    // });
   
    //  return
//  <div>

//     <ul>
//       {dataSlider.map((data) => {
//         if (handleFilter(data) === data.name) {
//           <li className="container-sm " key={data.id}>
//             {data.name}
//           </li>;
//         }
//         console.log(event, data.name);
//          return
//       }
//       )}
//     console.log(data.name);
//     </ul>;
// </div>

    // if (data.includes(newFilter)){

    // }
  };
  return (
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
    </div>
  );
}

export default Searchbar;
