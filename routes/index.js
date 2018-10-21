var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '404417049',name:'張子曜' });
});

module.exports = router;
