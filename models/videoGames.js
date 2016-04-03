
 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

   var videoGamesSchema = new Schema({
        title: String,
        developer: String,
        image: String,
        releaseDate: String,
   });

   var videoGames = mongoose.model('videoGames', videoGamesSchema);
   module.exports = videoGames;
