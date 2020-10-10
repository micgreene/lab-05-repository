'use strict'
//creating a server "live server-lite"

//Bringing express library to my server
const express = require('express');

//create an instance of express/start express
const app = express();

//creating a port to listen to
const PORT = process.env.PORT || 3000;

//create a pubic directory for serving files
app.use(express.static('public'));

//start our server
app.listen(PORT, ()=>{
  console.log(`Welcome to the server on port: ${PORT}`);
})