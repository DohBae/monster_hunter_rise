const router = require('express').Router();
const monsters = require('../db/queries/monsters');

router.get('/monsters', (req, res) => {
  monsters.getAllMonsters().then(data => {
    // console.log(data);
    res.json(data)
  });
});
  
router.get('/monsters/:id', (req, res) => {
  monsters.getMonsterById(req.params.id).then(data => {
    res.json(data)
  });
});

module.exports = router;
