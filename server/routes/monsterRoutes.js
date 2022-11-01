/////////// catsRoutes.js
const router = require('express').Router();
const monsters = require('../db/queries/monsters');

router.get('/', (req, res) => {
  monsters.getAllMonsters().then(data => {
    console.log(data);
    res.json({monsters: data})
  });
});
  

module.exports = router;
