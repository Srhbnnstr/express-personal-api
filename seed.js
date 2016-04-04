// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var new_profile = {
name: "Sarah Bannister",
photo: "portrait.jpg",
github_link: "https://https://github.com/Srhbnnstr",
current_city: "San Francisco, CA",
interests: [{type: "Animals"},
           {type: "Motorcycles"},
           {type: "Hiking"},
           {type: "Art"},
           {type: "Video Games"},
           {type: "Movies"},
           {type: "Traveling"}]
};

var videoGames_list = [
  {
  title: "Super Mario 64",
  developer: "Nintendo",
  //image: " ",
  releaseDate: "June 23, 1996"
  },
  {
  title: "Super Smash Bros. Melee",
  developer: "HAL Laboratory",
  //image: " ",
  releaseDate: "November 21, 2001"
  },
  {
  title: "Grand Theft Auto: Vice City",
  developer: "Rockstar Games",
  //image: " ",
  releaseDate: "October 27, 2002"
  },
  {
  title: "Fez",
  developer: "Polytron Coporation",
  //image: " ",
  releaseDate: "April 13, 2012"
  },
  {
  title: "Hotline Miami",
  developer: "Dennaton Games",
  //image: " ",
  releaseDate: "October 23, 2012"
  },
  {
  title: "The Last of Us",
  developer: "Naughty Dog",
  //image: " ",
  releaseDate: "June 14, 2013"
  },
  {
  title: "Rocket League",
  developer: "Psyonix",
  //image: " ",
  releaseDate: "July 7, 2015"
  },
  {
  title: "Fallout 4",
  developer: "Bethesda Game Studios",
  //image: " ",
  releaseDate: "November 10, 2015"
  }
];


db.videoGames.remove({}, function(err, videoGames) {
  console.log('removed all video Games');
db.videoGames.create(new_videoGames, function (err, videoGames) {
    if ("Error", err) {
      console.log(err);
    } else {
      console.log("Created new Video Game", videoGamesId);
    }
    });
      process.exit(); // we're all done! Exit the program.
    });
