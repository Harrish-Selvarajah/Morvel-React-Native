const express = require('express');
const axios = require('axios');
const app = express();
const cfmovies = [];
const novels = [];

//getting the recomended novel to the CF movies
axios.get('http://localhost:5000/getcfmovies/70')
  .then(response => {
    let cfmovies = response.data.cfmoviearray;
    console.log(response.data.cfmoviearray);
   
  })
  .catch(error => {
    console.log(error);
  });

axios.get('http://localhost:5000/novelreco')
  .then(response => {
    let novels = response.data.cfnovelarray;
    console.log(response.data.cfnovelarray);
    
  })
  .catch(error => {
    console.log(error);
  });
 

module.exports = app;