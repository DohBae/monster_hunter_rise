import React, { useState, useEffect } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import axios from 'axios';

function App() {
  const [allMonsters, setAllMonsters] = useState('');

  // const url = 'http://localhost:8080/';

  useEffect(() => {
    getAllMonsters();
  }, []);

  const getAllMonsters = () => {
    axios.get('http://localhost:8080/monsters')
    .then((res) => {
      console.log(res.data)
      for (let i = 0; i < res.data.length; i ++) {
        console.log(res.data[i].name)
        let monsterNames = res.data[i].name
        setAllMonsters(monsterNames);
      }
    })
  }

  // useEffect(() => {
  //   fetch(`/monsters`).then(
  //     res => res.json())
  //     .then(data => setAllMonsters)
  // })

  return (
    <div className="App">
      <SearchBar placeholder="Enter monster name..." data={setAllMonsters}/>
    </div>
  );
}

export default App;
