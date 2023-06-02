
const express = require('express');
const path = require('path');
const config = require('../client/src/config/config.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(config('app.port'), () => {
  console.log(`Server listening on ${config('app.port')}`);
});