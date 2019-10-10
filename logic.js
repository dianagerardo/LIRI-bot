var axios = require("axios");
var fs = require("fs");

var Object = {
    Concert: function (artist) {
        if (!artist) {
            artist = "Bad Bunny";
        }
        // `divider` will be used as a spacer between the tv data we print in log.txt
        var divider = "\n------------------------------------------------------------\n\n";
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function (response) {
            // parse the response body (string) to a JSON object
            var jsonData = response.data;
            var date = response.data[0].datetime;
            var results = `
            ${divider}
            Name of venue: ${response.data[0].venue.name}
            Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.country} 
            Date of event: ${date}`;
            console.log(results);
            fs.appendFile("log.txt", results, err => err ? console.log("Error") : console.log("File saved!"))

        })
    },
    Song: function (song) {
        // `divider` will be used as a spacer between the tv data we print in log.txt
        var divider = "\n------------------------------------------------------------\n\n";

        var Spotify = require('node-spotify-api');

        var spotify = new Spotify({
            id: e5d8b4881471435abcfeff2e95d28486,
            secret: b5837dfec9924e668678117ab200c7e1
        });

        spotify
            .search({ type: 'track', query: song })
            .then(function (response) {
                console.log(response);
                var results = `
            ${divider}
            Artist: ${response.data}
            Song's name: ${response.data}
            Preview link: ${response.data}
            Album: ${response.data}
            `

                console.log(results);
                fs.appendFile("log.txt", results, err => err ? console.log("Error") : console.log("File saved!"))
            })
            .catch(function (err) {
                console.log(err);
            });
    },

    Movie: function (movie) {
        if (!movie) {
            movie = "Mr. Nobody"
        }
        // `divider` will be used as a spacer between the tv data we print in log.txt
        var divider = "\n------------------------------------------------------------\n\n";
        var URL = "http://www.omdbapi.com?t=" + movie + "&apikey=trilogy";
        axios.get(URL).then(function (response) {

            var results = `
            ${divider}
                    Title of the movie: ${response.data.Title}
                    Year the movie came out: ${response.data.Year}
                    IMDB Rating of the movie: ${response.data.imdbRating}
                    Rotten Tomatoes Rating of the movie: ${response.data.Ratings.Value}
                    Country where the movie was produced: ${response.data.Country}
                    Language of the movie: ${response.data.Language}
                    Plot of the movie: ${response.data.Plot}
                    Actors in the movie: ${response.data.Acto}
                    `;
            console.log(results);
            fs.appendFile("log.txt", results, err => err ? console.log("Error") : console.log("File saved!"))
        })
    }
}

module.exports = Object;
