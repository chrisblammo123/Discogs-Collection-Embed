// Config files with specific data, such as tokens
const config = require('./config.json');

// Import the discogs api for node.js
const Discogs = require('disconnect').Client;

// Creates a new database object 
const database = new Discogs({userToken: "config.token"}).database();


const dis = new Discogs(config.UserAgent);



