import React, { useState, useEffect } from 'react';
import '../App.scss';
import Axios from 'axios';
import { Route, Routes } from "react-router-dom";

export default function MonsterInfo() {
  const [selectedMonster, setSelectedMonster] = useState([]);

  const getMonsterById = async () => {
    const data = await Axios.get(
      ''
    );
  }
  return (
    <div>Hello There!
    </div>
  );
}