var mongoose = require("mongoose");
mongoose.connect( 
                  "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.videoGames = require("./videoGames.js");
module.exports.profile = require("./profile.js");
