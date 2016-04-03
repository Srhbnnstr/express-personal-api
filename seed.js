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
  title: "Grand Theft Auto: Vice City",
  developer: "Rockstar Games",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  releaseDate: "October 27, 2002"
  },
  {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
  releaseDate: "April 10, 1925"
  },
  {
  title: "Les Miserables",
  author: "Victor Hugo",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
  releaseDate: "Unknown 1862"
  },
  {
  title: "Around the World in 80 Days",
  author: "Jules Verne",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
  releaseDate: "January 30, 1873"
  },
  {
  title: "Lean In",
  author: "Sheryl Sandberg",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
  releaseDate: "March 11, 2013"
  },
  {
  title: "The Four Hour Workweek",
  author: "Tim Ferriss",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
  releaseDate: "April 1, 2007"
  },
  {
  title: "Of Mice and Men",
  author: "John Steinbeck",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
  releaseDate: "Unknown 1937"
  },
  {
  title: "Romeo and Juliet",
  author: "William Shakespeare",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
  releaseDate: "Unknown 1597"
  }
];

var authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];

db.Author.remove({}, function(err, authors) {
  console.log('removed all authors');
  db.Author.create(authors_list, function(err, authors){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all authors');
    console.log("created", authors.length, "authors");


    db.Book.remove({}, function(err, books){
      console.log('removed all books');
      books_list.forEach(function (bookData) {
        var book = new db.Book({
          title: bookData.title,
          image: bookData.image,
          releaseDate: bookData.releaseDate
        });
        db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
          console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
          if (err) {
            console.log(err);
            return;
          }
          book.author = foundAuthor;
          book.save(function(err, savedBook){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
          });
        });
      });
    });

  });
});
