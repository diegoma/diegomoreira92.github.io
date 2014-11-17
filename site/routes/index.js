var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', function(req, res) {
  res.render('teste', { title: 'teste teste' });
});

module.exports = router;