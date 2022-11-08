import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

export default function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  return (
  <div className="search">
    <div className="searchInputs">
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
      <div className="searchIcon"></div>
    </div>

    {filteredData.length != 0 && (
      <div className="dataResult">
      {filteredData.slice(0, 10).map((value, key) => {
        return <a className="dataItem">
          <p>{value.name}</p>
          </a>
      })}
    </div>
    )
      
    }
  </div>
  );
}
