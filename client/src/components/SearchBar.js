import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

export default function SearchBar({placeholder, data}) {
  

  return (
  <div className="search">
    <div className="searchInputs">
      <input type="text" placeholder={placeholder} />
      <div className="searchIcon"></div>
    </div>
    <div className="dataResult">
      {data.map((value, key) => {
        return <a className="dataItem">
          <p>{value.name}</p>
          </a>
      })}
    </div>
  </div>
  );
}
