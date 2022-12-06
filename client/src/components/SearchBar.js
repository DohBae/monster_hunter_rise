import React, { useState } from 'react';
import './SearchBar.scss';
import axios from 'axios';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
// import MonsterInfo from "./MonsterInfo";
import { Link } from "react-router-dom";

export default function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");

  };

  return (
  <div className="search">
    <div className="searchInputs">
      <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
      <div className="searchIcon">
        {filteredData.length > 0 ? (
          <ClearSharpIcon id="clearBtn" onClick={clearInput} /> 
          ) : ( 
          <SearchSharpIcon />  
        )} 
        </div>
    </div>

    {filteredData.length !== 0 && (
      <div className="dataResult">
      {filteredData.slice(0, 10).map((value, key) => {
        return <a className="dataItem" key={value.id} href="https://www.google.com/">
          <p>{value.name}</p>
          </a>
      })}
    </div>
    )
      
    }
  </div>
  );
}
