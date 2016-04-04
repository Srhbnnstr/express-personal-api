console.log("Sanity Check: JS is working!");
var template;
var $videoGamesList;
var all_videoGames = [];

$(document).ready(function(){

  $videoGamesList = $('#videoGamesTarget');

  // compile handlebars template
  var source = $('#videoGames-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/videoGames',
    success: handleSuccess,
    error: handleError
  });

  $('#new_videoGamesForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/videoGames',
      data: $(this).serialize(),
      success: new_videoGamesSuccess,
      error: new_videoGamesError
    });
  });

  $videoGamesList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/videoGames/'+$(this).attr('data-id'),
      success: delete_videoGamesSuccess,
      error: delete_videoGamesError
    });
  });

});

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $videoGamesList.empty();


  var videoGamesHtml = template({ videoGames: all_videoGames });

  // append html to the view
  $videoGamesList.append(videoGamesHtml);
}

function handleSuccess(json) {
  all_videoGames = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#videoGamesTarget').text('Something went wrong, failed to load games');
}

function new_videoGamesSuccess(json) {
  $('#new_videoGamesForm input').val('');
  all_videoGames.push(json);
  render();
}

function new_videoGamesError() {

}

function delete_videoGamesSuccess(json) {
  var videoGames = json;
  var videoGamesId = videoGames._id;

  // find the video game with the correct ID and remove it from our all_videoGames array
  for(var index = 0; index < all_videoGames.length; index++) {
    if(all_videoGames[index]._id === videoGamesId) {
      all_videoGames.splice(index, 1);
      break;
    }
  }
  render();
}

function delete_videoGamesError() {

}
