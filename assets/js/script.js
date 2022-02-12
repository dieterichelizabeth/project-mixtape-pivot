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
  $('<p class="text-sm">Previous study sessions:</p>').appendTo('#affirmation');
  // Display completed tasks to the user
  for (let i = 0; i < completedToDo.length; i++) { 
      $('<p class="text-xs">' + completedToDo[i] + '</p>').appendTo('#affirmation');
      }
  $('<button class="bg-gray-500 text-white rounded-md p-1" id="clear">Clear</button>').appendTo('#affirmation');
  clearStudySesh();
});

//When start is clicked...
$( "#start" ).click(function() {
    var thingToDo = toDoEl.value.trim();
    completedToDo.push(thingToDo);
    localStorage.setItem("Completed To-do items", JSON.stringify(completedToDo));
    $('#content').empty();
    $('#content').append('<p>Task at hand: ' + thingToDo + '</p>'); 

    // start the timer
    studyCountDown();

    // display the video
    $('#content').append('<iframe width="535" height="300" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"></iframe>'); 
    
    // display inspriational quote
    cuteQuote();
  });

// Timer (Task time!)
function studyCountDown() {
  console.log("timer start");
    studyTime = 25;
    var timeLeft = studyTime * 60; 
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        var minutes = Math.floor(timeLeft/60)
        if (minutes<10) {
          minutes = '0' + minutes;
        }
        let seconds = timeLeft % 60;
        if (seconds<10) {
          seconds = '0' + seconds;
        }
        $("#timer").text('Timer: ' + minutes + ':' + seconds);
        timeLeft --;
      } 
      else {
        // Once `timeLeft` gets to 0, game over
        $("#timer").text('');
        clearInterval(timeInterval);
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
            quoteSlip = quote.slip.advice;
            $('#affirmation').text(quoteSlip);
        })
    })
}

// Transition to Break Time
function takeABreak() {
    $( "#content").empty();
    $('#affirmation').text("time for a break!");
    // display a photo from Unsplash
    calmingBreak();
    // start break timer
    breakCountDown();
}

// Image Search/display limit- 50 calls per hour
var calmingBreak = function() {
    accessKey = "gtFcwNhmDeOTlqI5JaD3lsDRHX8wEhxWNcMqDyC5NYc ";
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
    breakTime = 5;
    var timeLeft = breakTime * 60; 
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        var minutes = Math.floor(timeLeft/60)
        if (minutes<10) {
          minutes = '0' + minutes;
        }
        let seconds = timeLeft % 60;
        if (seconds<10) {
          seconds = '0' + seconds;
        }
        // Set the `textContent` of `timerEl'
        $("#timer").text('Timer: ' + minutes + ':' + seconds);
        timeLeft --;
      } 
      else {
        $("#timer").text('');
        clearInterval(timeInterval);
        location.reload();
        }
    }, 1000);
  }

// set array to null and push to local storage, then clear that div
function clearStudySesh () {
$( "#clear" ).click(function() {
  completedToDo = [];
  localStorage.setItem("Completed To-do items", JSON.stringify(completedToDo));
  location.reload();
});
}