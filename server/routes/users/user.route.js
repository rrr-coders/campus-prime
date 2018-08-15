const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/users/user');

router.head('/', (req, res, next) => {
  let username = req.query.username
    User.getUser(req.query, (err, data) => {      
      if(err){
        res.status(500);
      }else{
        res.status(data ? 200 : 404)
      }
      res.send();
    });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('users');
});

router.post('', (req, res, next) => {
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    registerNo: req.body.registerNo,
    phone: req.body.phone
  });

  User.addUser(user, (err, data) => {
    if (err) {
      res.status(500);
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.status(201)
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });
});

router.get('/');

module.exports = router;
