// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var Object = require("./logic.js");


var search = process.argv[2];
var type = process.argv.slice(3).join(" ");

// Make it so liri.js can take in one of the following commands:

//  `concert-this`
if(!search){
    console.log("Search for concert using 'concert-this', song using'spotify-this-song', movie using 'movie-this'")
}
else if(search === "concert-this"){
    console.log("Searching for concert");
    Object.Concert(type);
}

//  `spotify-this-song`
else if(search === "spotify-this-song"){
    console.log("Searching for song");
    Object.Song(type);
}


//    * `movie-this`
else if(search === "movie-this"){
    console.log("Searching for show");
    Object.Movie(type);
}

// `do-what-it-says`
else if(search === "do-what-it-says"){
    console.log("Searching for song");
}


//    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.