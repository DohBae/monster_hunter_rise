import React, { useState, useEffect } from 'react';
import './App.css';
import './components/SearchBar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import Axios from 'axios';
import axios from 'axios';

function App() {
  const [allMonsters, setAllMonsters] = useState([]);


  // const url = 'http://localhost:8080/';

  
  // const getAllMonsters = () => {
  //   axios.get('http://localhost:8080/monsters')
  //   .then((res) => {
  //     console.log(res.data)
  //     for (let i = 0; i < res.data.length; i ++) {
  //       console.log(res.data[i])
  //       // let monsterNames = res.data[i].name
  //       setAllMonsters(res.data[i]);
  //     }
  //   })
  // }
  const getAllMonsters = async () => {
    const data = await Axios.get(
      'http://localhost:8080/monsters'
    );
    // console.log(data.data)
    let allMonsters = data.data
    setAllMonsters(allMonsters)
    // allMonsters.map(monsters => console.log(monsters.name))
  }
  // const getAllMonsters = async () => {
  //   const { data } = await Axios.get(
  //     'http://localhost:8080/monsters'
  //   );
  //   const allMonsters = data;
  //   setAllMonsters(allMonsters)
  //   console.log(allMonsters)
  // }
  // const getAllMonsters = async () => {
  //   const { data } = await Axios.get(
  //     'http://localhost:8080/monsters'
  //   );
  //   const allMonsters = data;
  //   for (let i = 0; i < allMonsters.length; i++) {
  //     // console.log(allMonsters[i])
  //     // console.log(allMonsters.map.get('name'))
  //     // console.log(typeof allMonsters)
  //     // const monsterArray = Object.entries(allMonsters[i]).map(entry => {
  //     //   return {[entry[0]]: entry[1]};
  //     // })
  //     // console.log(monsterArray)
  //     // console.log(typeof monsterArray)
  //     // console.log(Object.values(allMonsters[i]))
  //   }
  //   setAllMonsters(allMonsters);
  //   // console.log(Object.values(allMonsters))
  // }
  
  useEffect(() => {
    getAllMonsters();
  }, []);
  
  // useEffect(() => {
  //   axios.get('http://localhost:8080/monsters')
  //   .then((res) => {
  //     console.log(res.data)
  //     for (let i = 0; i < res.data.length; i ++) {
  //       console.log(res.data[i].name)
  //       // let monsterNames = res.data[i].name
  //       setAllMonsters(res.data[i].name);
  //     }
  //   })
  // }, []);

  return (
    <div className="App">
      <SearchBar placeholder="Enter monster name..." data={allMonsters}/>
    </div>
  );
}

export default App;
