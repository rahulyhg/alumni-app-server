var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var JobList = require('./JobListSchema');

/* GET /todos listing. */
router.get('/', function(req, res, next) {

	// Query from db
  JobList.find({},{name:1, location:1 , role:1 , type:1},function (err, todos) {
    if (err) return next(err);

    // returning in json format
    res.json(todos);

  });

});

router.get('/detail/:id', function(req, res, next) {

// console.log('request',req.params.id);
// console.log('request id',req.id);
	// Query from db
  JobList.findById(req.params.id,{_id:0, kahani:1, contactweb:1 , contactemail:1 },function (err, todos) {
    if (err) return next(err);

    // returning in json format
    res.json(todos);

  });

});

module.exports = router;