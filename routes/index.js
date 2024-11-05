var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('Project', { title: 'Project' });
});

router.get('/contactme', function(req, res, next) {
  res.render('form', { title: 'Contact Me' });
});


module.exports = router;
