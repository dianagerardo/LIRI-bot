var axios = require("axios");
var fs = require("fs");

var Object = {
    Concert: function (artist) {
        if(!artist){
            artist = "Bad Bunny";
        }
        // `divider` will be used as a spacer between the tv data we print in log.txt
        var divider = "\n------------------------------------------------------------\n\n";
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function (response) {
            // parse the response body (string) to a JSON object
            var jsonData = response.data;
            var date = response.data[0].datetime;
            var results= `
            ${divider}
            Name of venue: ${response.data[0].venue.name}
            Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.country} 
            Date of event: ${date}`;
            console.log(results);
            fs.appendFile("log.txt", results, err => err ? console.log("Error"): console.log("File saved!"))

        })
    },
    Song: function () {
        // `divider` will be used as a spacer between the tv data we print in log.txt
        
        var divider = "\n------------------------------------------------------------\n\n";

    },

    Movie: function (movie) {
        if(!movie){
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
            fs.appendFile("log.txt", results, err => err ? console.log("Error"): console.log("File saved!"))
        })
    }
}

module.exports = Object;
