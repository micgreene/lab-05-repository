'use strict'
//creating a server "live server-lite"

//Bringing express library to my server
require('dotenv').config();
const express = require('express');

//create an instance of express/start express
const app = express();

//creating a port to listen to
const PORT = process.env.PORT || 3000;

//create a pubic directory for serving files
app.use(express.static('/public'));

//start our server
app.listen(PORT, ()=>{
  console.log(`Welcome to the server on port: ${PORT}`);
});

//Additional Functions Not Yet Covered
// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));