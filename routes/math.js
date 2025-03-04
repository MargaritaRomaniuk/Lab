var express = require('express');
var router = express.Router();
var utils = require('../modules/utils');

// Redirect home page to /math/add
router.get('/', function(req, res, next) {
  res.redirect("/math/add");  
});

/* Addition Route */
router.get('/add', function(req, res, next) {
  let result = null;
  let { num1, num2 } = req.query;

  if (num1 && num2) {
    result = utils.add(parseFloat(num1), parseFloat(num2));
  }

  res.render('compute', { title: 'Add', result, num1, num2, symbol: "+" });
});

/* Division Route */
router.get('/divide', function(req, res, next) {
  let result = null;
  let { num1, num2 } = req.query;

  if (num1 && num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
      result = "Error: Division by zero";  // Prevent division by zero
    } else {
      result = utils.divide(num1, num2);
    }
  }

  res.render('compute', { title: 'Divide', result, num1, num2, symbol: "/" });
});

/* Multiplication Route */
router.get('/multiply', function(req, res, next) {
  let result = null;
  let { num1, num2 } = req.query;

  if (num1 && num2) {
    result = utils.multiply(parseFloat(num1), parseFloat(num2));
  }

  res.render('compute', { title: 'Multiply', result, num1, num2, symbol: "*" });
});

/* Subtraction Route */
router.get('/subtract', function(req, res, next) {
  let result = null;
  let { num1, num2 } = req.query;

  if (num1 && num2) {
    result = utils.subtract(parseFloat(num1), parseFloat(num2));
  }

  res.render('compute', { title: 'Subtract', result, num1, num2, symbol: "-" });
});

module.exports = router;
