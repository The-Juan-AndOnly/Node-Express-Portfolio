const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
  res.render('project', { projects });
});

module.exports = router;
