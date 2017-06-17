
const express = require('express');
const router = express.Router();

const ProjectsController = require('./../controllers/projectsController');
const {catchErrors} = require('./../handlers/errorHandlers');


router.get('/', catchErrors(ProjectsController.index));
router.get('/projects', catchErrors(ProjectsController.index));
router.get('/projects/:id', catchErrors(ProjectsController.detail));

router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact us',
  })
});

module.exports = router;
