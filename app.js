// Variables

// Node Modules and Constructors

const fs = require('fs');                         // Allows writing to files
const Discogs = require('disconnect').Client;     // Discogs API from the disconnect node library
// const database = new Discogs({userToken: "config.token"}).database(); // Creates a new discogs database object with user token auth
const disc = new Discogs(config.UserAgent, {      // Creates a new discogs object using consumer key and secret for authentication
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret
});




// Local File Includes

// Config files with specific data, such as tokens
const config = require('./config.json');









