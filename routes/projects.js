const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
  res.render('project', {
    title: projects[0].project_name,
    description: projects[0].description,
    technologies: projects[0].technologies,
    live_link: projects[0].live_link,
    github_link: projects[0].github_link
  });
});

module.exports = router;
