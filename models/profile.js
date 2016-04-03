
 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

   var profileSchema = new Schema({
        name: String,
        photo: String,
        github_link: String,
        current_city: String,
        hobbies: String,
   });

   var profile = mongoose.model('profile', profileSchema);
   module.exports = profile;
