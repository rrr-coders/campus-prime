const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const config = require('./server/config/database');

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);
mongoose.connection.on('connected', () => {
  console.log('connected to database');
});

mongoose.connection.on('error', err => {
  console.err('error connecting to db', err);
});
// API file for interacting with mongodb

const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// cors middleware
app.use(cors());

// API location
app.use('/api', api);
// app.use('/api', router)

// send all other requests to the angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`running on port: ${port}`);
});
