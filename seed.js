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
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
  releaseDate: "October 27, 2002"
  },
  {
  title: "Fez",
  developer: "Polytron Coporation",
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
  releaseDate: "April 13, 2012"
  },
  {
  title: "Hotline Miami",
  developer: "Dennaton Games",
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
  releaseDate: "October 23, 2012"
  },
  {
  title: "The Last of Us",
  developer: "Naughty Dog",
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
  releaseDate: "June 14, 2013"
  },
  {
  title: "Rocket League",
  developer: "Psyonix",
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
  releaseDate: "July 7, 2015"
  },
  {
  title: "Fallout 4",
  developer: "Bethesda Game Studios",
  //image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
  releaseDate: "November 10, 2015"
  }
];

// db.Author.remove({}, function(err, authors) {
//   console.log('removed all authors');
//   db.Author.create(authors_list, function(err, authors){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all authors');
//     console.log("created", authors.length, "authors");
//
//
//     db.Book.remove({}, function(err, books){
//       console.log('removed all books');
//       books_list.forEach(function (bookData) {
//         var book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         });
//         db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
//           console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           book.author = foundAuthor;
//           book.save(function(err, savedBook){
//             if (err) {
//               return console.log(err);
//             }
//             console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
//           });
//         });
//       });
//     });
//
//   });
// });
