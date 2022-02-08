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
Step 2: create general HTML setup
    - title
    - div for the youtube video? + image?
    - add user input to pick a task "add up to 4 tasks"
    - start button for timer
Step 3: 
    - when the user clicks start, 
        - the timer is displayed under the app title
        - an inspirational quote is displayed under the title
    - the user's first task is displayed to them
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