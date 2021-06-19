// TODO: make a nice and fun test



/////////// copied from app.js for now

// Config files with specific data, such as tokens
const config = require('./config.json');

// Import the discogs api for node.js
const Discogs = require('disconnect').Client;

// Creates a new database object 
const database = new Discogs({userToken: "config.token"}).database();


const dis = new Discogs(config.UserAgent);




////////////////


console.log("Checking database for \' Perturbator - New Model\'.");

database.getRelease(11081591, (err, data) => {
	console.log(data);
	console.error("Error: " + err);
});

console.log("Checking database for the cover of \'Carpenter Brut - Trilogy (master\', using promises.")

database.search({artist: "Carpenter Brut", release_title: "Trilogy", type: "master"})
	.then(function (searchResult) {
		if(searchResult.results.length > 0) {
			console.log("Found an album cover!");
			console.log("URL: " + searchResult.results[0].cover_image)
		}
		else
			console.log("No album cover was found.")
	})
	.catch(function (err) {
		console.error("Error: " + err);
	});