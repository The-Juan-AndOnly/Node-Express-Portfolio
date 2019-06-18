const express = require('express');
const router = express.Router();
const path = require('path');

const { data } = require('../data/data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const projectData = projects[id];

  res.render('project', { projectData });
});

module.exports = router;
