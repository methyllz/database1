var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "張子曜"
  }, {
  	id: 2,
  	username: "蔡亞霖"
  }, {
    id:3,
    username:"薛仲烜"
  }]);
});

module.exports = router;
