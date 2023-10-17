var express = require('express');
var router = express.Router();
var users = require('../data/users-list');
var usersWithDetails = require('../data/users-details-list');

var fs = require('fs')
var path = require('path');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});

router.get('/details', function (req, res, next) {
  const user = usersWithDetails.find((user) => user.id === req.query.id)
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(user));
});

router.post('/add', function (req, res, next) {
  usersWithDetails.push(req.body);
  users.push({
    id: `${users.length++}`,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age
  })
  res.end('ok');
});

module.exports = router;
