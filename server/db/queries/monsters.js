const db = require('../../configs/db.config');

const getAllMonsters = () => {
  return db.query("SELECT * FROM monsterslrg;").then(data => {
    return data.rows;
  })
}

const getMonsterById = id => {
  return db.query('SELECT * FROM monsterslrg WHERE id = $1;', [id]).then(data => {
    return data.rows;
  })
}

module.exports = {getAllMonsters, getMonsterById}