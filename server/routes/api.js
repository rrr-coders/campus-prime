const express = require('express');
const router = express.Router();
const app = express();
// Get users

app.get('', (req, res) => {
  res.send('api');
});

const users = require('./users/user.route');
const auth = require('./auth');
app.use('/users', users);
app.use('/auth', auth);


module.exports = router;
module.exports = app;
