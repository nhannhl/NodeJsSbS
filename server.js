import 'dotenv/config';
import express from 'express';

const server = express();
const http = require('http').Server(server);

console.log(process.env.MY_SECRET);

http.listen(3000, () => {
    console.log('Server started at: 3000');
  });