const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM drugs ORDER BY name ASC', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });  

  
module.exports = router;
