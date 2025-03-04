var express = require('express');
var router = express.Router();

/* Redirect home page to /math/add */
router.get('/', function(req, res, next) {
  res.redirect("/math/add");  // Redirect directly to addition by default
});

module.exports = router;
