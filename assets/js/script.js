// Variable to hold form input
var toDoEl = document.querySelector("#task-name");

// when document loads, get items from local storage and display on the screen (if applicable)
$(document).ready(function() {
  // load items from local storage to display
  completedToDo = JSON.parse(localStorage.getItem("Completed To-do items"));
    // if nothing in local storage, create an empty array
    if (!completedToDo) {
      completedToDo = [];
      // save to storage
      localStorage.setItem("Completed To-do items", JSON.stringify(completedToDo));
    }

  // add the to do's of previous "sessions"
  $('<p>Previous study sessions:</p>').appendTo('#affirmation');
  // Display completed tasks to the user
  for (let i = 0; i < completedToDo.length; i++) { 
      // add the task text + styling(bootstrap) + id
      $('<p>' + completedToDo[i] + '</p>').appendTo('#affirmation');
      }
  // display a clear button
  $('<button id="clear">Clear</button>').appendTo('#affirmation');
  // pass dynamic variable
  clearStudySesh();
});

//When start is clicked...
$( "#start" ).click(function() {
    // Grab the HTML entered in the form
    var thingToDo = toDoEl.value.trim();
    completedToDo.push(thingToDo);
    // save to storage
    localStorage.setItem("Completed To-do items", JSON.stringify(completedToDo));

    // clear the welcome - display the task at hand + inspirational quote
    $('#content').empty();
    $('#content').append('<p>Task at hand: ' + thingToDo + '</p>'); 

    // start the timer
    countDown();

    // display the video
    $('#content').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"></iframe>'); 
    
    // display the inspirational quote
    cuteQuote();
  });

// Timer (Task time!)
function countDown() {
    var timeLeft = 20; 
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
          $("#timer").text('Time left: ' + timeLeft);
        // Decrement `timeLeft` by 1
        timeLeft --;
      } 
      else {
        // Once `timeLeft` gets to 0, game over
        $("#timer").text('');
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //go to "break"
        takeABreak();
        }
    }, 1000);
  }

// Function to get a nice "quote for thought"...Call when ready
var cuteQuote = function(){
    var apiURL = "https://api.adviceslip.com/advice";
    // fetch the quote
    fetch(apiURL).then(function(response){
        // format the quote w/ JSON
        response.json().then(function(quote){
            console.log(quote);
            // variable to hold the quote itself
            quoteSlip = quote.slip.advice;
            // grabs id to display the quote
            $('#affirmation').text(quoteSlip);
        })
    })
}

// Transition to Break Time
function takeABreak() {
    // clear content div
    $( "#content").empty();

    // advise user of break
    $('#affirmation').text("time for a break!");

    // display a photo from Unsplash
    // calmingBreak();

    // start break timer
    breakCountDown();
}

// Image Search/display limit- 50 calls per hour
var calmingBreak = function() {
    accessKey = "";
    // searches for a random photo - specific searches require authorization
    var apiURL = "https://api.unsplash.com/photos/random/?client_id=" + accessKey;
    
    fetch(apiURL).then(function(response) {
        response.json().then(function(image){
          console.log(image);

          // displays the image itself (link to photo on Unsplashed = API required)
          var imageItself = image.urls.regular;
          $('<a href="'+ image.links.html + '"><img src="' + imageItself + '"></a> ').appendTo('#calmingImage');
           

          // add photographer credits (Link to photographer profile + photographer name = API required)
          $('<a href="' + image.user.portfolio_url + '">' + image.user.name + '</a>').appendTo('#calmingImage');

          // crediting unsplash (API required)
          $('<br><a href="https://unsplash.com/">Unsplash</a>').appendTo('#calmingImage');
        })
    })
}

// Break Timer!
function breakCountDown() {
    var timeLeft = 20; 
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
          $("#timer").text('Time left: ' + timeLeft);
        // Decrement `timeLeft` by 1
        timeLeft --;
      } 
      else {
        // Once `timeLeft` gets to 0, game over
        $("#timer").text('');
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //refresh the page
        location.reload();
        }
    }, 1000);
  }

function clearStudySesh () {
$( "#clear" ).click(function() {
  // set array to null and push to local storage, then clear that div
  completedToDo = [];
  localStorage.setItem("Completed To-do items", JSON.stringify(completedToDo));
  // location.reload();
  $('#affirmation').empty();
});
}