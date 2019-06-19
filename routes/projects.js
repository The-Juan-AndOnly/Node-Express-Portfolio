const express = require('express');
const router = express.Router();
const path = require('path');

const { data } = require('../data/data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const projectData = projects[id];
  projectData !== undefined
    ? res.render('project', { projectData })
    : res.redirect(301, '/');
});

router.get('/', (req, res) => {
  res.redirect(301, '/');
});

module.exports = router;
