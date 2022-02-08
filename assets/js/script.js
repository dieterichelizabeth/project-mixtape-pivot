/*
Project pivot
Step 1: make a successful call from both API's
    - FIRST COMPLETE
        - https://quotesondesign.com/api/ ASLO WORKS!
    - Unsplash
        - All API uses must use the hotlinked image URLs returned by the API under the photo.urls 
          properties. This applies to all uses of the image and not just search results.
        - When displaying a photo from Unsplash, your application must attribute Unsplash, 
          the Unsplash photographer, and contain a link back to their Unsplash profile.
          All links back to Unsplash should use utm parameters in the ?
        - Your application’s Access Key and Secret Key  must remain confidential. 
          This may require using a proxy if accessing the API client-side.
    Step 1.1: add error handling
Done Step 2: create general HTML setup
    - title
    - div for the youtube video? + image?
    - allow user to add the task they wish to work on
    - start button for timer
Step 3: 
    - when the user clicks start, 
        - the timer is displayed under the app title
        - an inspirational quote is displayed under the title
    - the user's task is displayed to them
    - chillhop study girl youtube video is displayed and plays
Step 4: 
    - create the timer function to countdown from 25 minutes
        - use secconds for development
Step 5: when the timer runs out, display a photo from the unsplash api
    - another timer starts for 5 minutes
Step 6: figure out how to loop the timer so that with each loop, the next task is displayed
Step 7: after the fourth round, display "time to take a longer break: 15-30 minutes"
    - "restart the app after your break to continue"...or something like that
*/
var toDoEl = document.querySelector("#task-name");

$( "#start" ).click(function() {
    console.log("start clicked");

    // Grab the HTML entered in the form
    var task = toDoEl.value.trim();
    console.log(task)

    // clear the welcome - display the task at hand + inspirational quote
    $( "#content").empty();
    $('#content').append('<p>Task at hand: ' + task + '</p>'); 

    // start the timer
    countDown();

    // display the video

    // display the inspirational quote
    // cuteQuote();
  });

// Timer
function countDown() {
    var timeLeft = 10; 
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

// Image Search/display limit- 50 calls per hour
var calmingBreak = function() {
    accessKey = "";
    // searches for a random photo - specific searches require authorization
    var apiURL = "https://api.unsplash.com/photos/random/?client_id=" + accessKey;
    
    fetch(apiURL).then(function(response) {
        response.json().then(function(image){
            console.log(image);
            // ImageLink: console.log(image.urls.regular); PhotographerName: console.log(image.user.name); PhotographerAccount:console.log(image.user.links.self);
            
            // gets the image itself
            console.log(image.links.html);
            var imageItself = String(image.links.html);
            // send to display image (created to get around CORS- not working)
            displayImage(imageItself)
        })
    })
}

function displayImage(imageItself) {
// creates a new image
var img = new Image();
// grabs the https from the earlier fetch
var imagePicture = imageItself;
// sets the source
img.src = imagePicture;
// append to div
document.getElementById('calmingImage').appendChild(img);
}

