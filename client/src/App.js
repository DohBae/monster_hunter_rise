import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import './components/SearchBar.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
// import MonsterInfo from "./components/MonsterInfo";
import Axios from 'axios';

function App() {
  const [allMonsters, setAllMonsters] = useState([]);

  const getAllMonsters = async () => {
    const data = await Axios.get(
      'http://localhost:8080/monsters'
    );
    let allMonsters = data.data
    setAllMonsters(allMonsters)
  }
  
  useEffect(() => {
    getAllMonsters();
  }, []);
  

  return (
    <div className="App">
        <SearchBar placeholder="Enter monster name..." data={allMonsters}/>
    </div>
  );
}


export default App;
