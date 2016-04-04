var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "https://pumpkin-crisp-33237.herokuapp.com/");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.videoGames = require("./videoGames.js");
module.exports.profile = require("./profile.js");
