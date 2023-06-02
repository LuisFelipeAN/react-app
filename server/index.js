import express from 'express';
import { resolve } from 'path';
import config from '../client/src/config/config.js';

const app = express();
console.log(config('clerk.key'));
app.get("/api", (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Have Node serve the files for our built React app
app.use(express.static(resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(config('app.port'), () => {
  console.log(`Server listening on ${config('app.port')}`);
});