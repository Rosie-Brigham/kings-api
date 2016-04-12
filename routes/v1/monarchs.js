var express = require('express');
var router = express.Router();

var monarchs = require('../../models/monarchs')

/* GET home page. */
router.get('/', function(req, res, next) {
  monarchs.all()
    .then(function(monarchs) {
      res.json(monarchs);
    })
    .catch(function(err) {
      res.body(err);
    })
});


router.get('/:year', function(req, res, next) {
  var yearParam = req.params.year
  monarchs.year(yearParam)
    .then(function(monarchs) {
      res.json(monarchs);
    })
    .catch(function(err) {
      res.send(err.body);
    })
});


module.exports = router;
