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
  res.end();
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

router.post('/edit', function (req, res, next) {

  try {
    const userEditedData = req.body;
    const user = users?.find((user) => user.id === userEditedData.id);
    const userWithDetails = usersWithDetails?.find((user) => user.id === userEditedData.id);
    console.log(userWithDetails)
    console.log(userEditedData.address.street)


    user.name = userEditedData?.name;
    userWithDetails.name = userEditedData?.name;

    user.surname = userEditedData?.surname;
    userWithDetails.surname = userEditedData?.surname;

    userWithDetails.address.postalCode = userEditedData?.address.postalCode;
    userWithDetails.address.city = userEditedData?.address.city;
    userWithDetails.address.street = userEditedData?.address.street;

    res.status(200);
  } catch (error) {
    console.log(error)
    res.status(500);
  }
  res.end();
});

module.exports = router;
