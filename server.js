// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
 });

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    document_all_endpoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Srhbnnstr/express-personal-api",
    base_url: "https://pumpkin-crisp-33237.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/videoGames", description: "Lists my favorite games"},
      {method: "POST", path: "/api/videoGames", description: "Add a new game"},
      {method: "DELETE", path: "/api/videoGames/:id", description: "Delete a game"}

    ]
  });
});

app.get('/api/profile', function (req, res) {
db.Profile.find({}, function (err, profile){
     if (err) {
       res.status(500).json('error');
     }
     res.status(200).json(profile);
   });
 });

//get all video games
app.get('/api/videoGames', function (req, res) {});
//return as JSON response
db.videoGames.find()
  .exec(function(err, videoGames) {
    if (err) { return console.log("index error: " + err); }
    res.json(videoGames);
 });
});

// get one video game
app.get('/api/videoGames/:id', function (req, res) {
  db.videoGames.findOne({_id: req.params._id }, function(err, data) {
    res.json(data);
  });
});

// create new video game
app.post('/api/videoGames', function (req, res) {
  // create new video game with form data (`req.body`)
  var new_videoGames = new db.videoGames({
    title: req.body.title,
    developer: req.body.developer,
    image: req.body.image,
    releaseDate: req.body.releaseDate,
  });

  // save new video game to database
    new_videoGames.save(function(err, book){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", videoGames.title);
      res.json(videoGames);
    });
  });

// delete video game
app.delete('/api/videoGames/:id', function (req, res) {
  // get video game id from url params (`req.params`)
  console.log('videoGames delete', req.params);
  var videoGamesId = req.params.id;
  // find the index of the video game we want to remove
  db.videoGames.findOneAndRemove({ _id: videoGamesId }, function (err, deleted_videoGames) {
    res.json(deleted_videoGames);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
 });
