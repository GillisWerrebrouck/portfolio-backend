const express = require('express');
const projectRepo = require('../repositories/project.repo');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  projectRepo.getAllProjects().then((projects) => {
    res.json(projects);
  }).catch((err) => {
    res.json(err);
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/:slug', (req, res, next) => {
  projectRepo.getOneProject(req.params.slug).then((project) => {
    res.json(project);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
