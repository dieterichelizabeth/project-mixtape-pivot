/*
Project pivot
Step 1: make a successful call from both API's
    - FIRST COMPLETE
        - https://quotesondesign.com/api/ ASLO WORKS!
    -
Step 2: create general HTML setup
    - title
    - div for the youtube video?
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

// Attempt at API call # 1
var cuteQuote = function(){
    var apiURL = "https://api.adviceslip.com/advice";
     // fetch the quote
    fetch(apiURL).then(function(response){
        // format the quote w/ JSON
        response.json().then(function(quote){
            console.log(quote);
            //the quote itself
            quoteSlip = quote.slip.advice;
            // Display the quote
            $('#affirmation').text(quoteSlip);
        })
    })
}

cuteQuote();