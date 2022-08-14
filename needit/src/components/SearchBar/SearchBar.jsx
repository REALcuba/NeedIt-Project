import React from 'react'

//style
import "./searchBar.css"

function Searchbar() {
  return (
    <div className="searchBarDiv">
         <div >
          <div className='searchBarWrapper'>
            <input className="searchBar" type="text" placeholder="Search" />
            <input type="submit" className="Btn" value="search" />
          </div>
        </div>
    </div>
  )
}

export default Searchbar