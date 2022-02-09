/*
Project pivot
Step 1: make a successful call from both API's
    - Advice Slip API COMPLETE
        - https://quotesondesign.com/api/ ASLO WORKS!
    - Unsplash COMPLETE
        - All API uses must use the hotlinked image URLs returned by the API under the photo.urls 
          properties. This applies to all uses of the image and not just search results.
        - When displaying a photo from Unsplash, your application must attribute Unsplash, 
          the Unsplash photographer, and contain a link back to their Unsplash profile.
          All links back to Unsplash should use utm parameters in the ?
        - Your application’s Access Key and Secret Key  must remain confidential. 
          This may require using a proxy if accessing the API client-side.
    - Add error handling
Done Step 2: create general HTML setup
    - title, div for the youtube video + image
    - allow user to add the task they wish to work on, start button for timer
        - add error handling
Done Step 3: 
    - when the user clicks start, 
        - the timer is displayed under the app title
        - an inspirational quote is displayed under the title
    - the user's task is displayed to them
    - chillhop study girl youtube video is displayed and plays
Done Step 4: 
    - create the timer function to countdown from 25 minutes
        - use secconds for development
Done Step 5: when the timer runs out, display a photo from the unsplash api
    - another timer starts for 5 minutes
Done Step 6: set up tailwind
Done Step 7: add local storage ("study session") functionality
Step 7: Styling elements with HTML
Step 8: Revert timer to minutes (25 minutes for "task time", 5 minutes for "break time")

Issues:
- Both timers needs to be re-worked
    - 1500 secconds in a minute: create a function to display time in "minutes"
*/


/*
To-do: 
- add API error handling
- styling the HTML elements
- set up env file for keys
- timer
*/

/* Future Improvements:
- figure out how to loop the timer so that with each loop, the next task is displayed
- pause button on timer, add and subtract time
- after the fourth round, display "time to take a longer break: 15-30 minutes"
    - "restart the app after your break to continue"...or something like that
- add user input tasks to "completed list" in local storage
    - upon load display for the user to see their work/time
- social media api addition
- overlay "time for a break" onto the api image
*/

/**
Timer

(function(){

  const start = document.getElementById('start');
  const pause = document.getElementById('pause');
  const stop = document.getElementById('stop');
  let timer = document.getElementById('timer');
  const audio = document.getElementById('audio');
  const time = 25 + ":" + "0"+0; 
  const title = document.title;
  let pointsContainer = document.getElementById('points');
  let points = 0;
  let isNull = false;
  timer.innerHTML = time;
  
    // ------- Start Button --------- //  
     start.addEventListener('click',function(e){
      this.disabled = true;
       audio.innerHTML = "Keep Going!";

       if(isNull){
          startTimer();
          timer.innerHTML = time;
          isNull = false;
       
        }else{
          
          startTimer();
       }
    })
    
    // ------- Pause Button --------- //
    pause.addEventListener('click', function(){
      if(start.disabled){
        audio.innerHTML = "Are you kidding me?";
      }
      start.disabled = false;
      myStopFunction();
    });
    
    // ------- Stop Button --------- //
    stop.addEventListener('click', function(){
      audio.innerHTML = "";
      timer.innerHTML = time;
      
      myStopFunction();
      start.disabled = false;
      document.title = title;

    });
    
  // --------- Function for Timer to Run -------- //  
  let timerName;
  function startTimer() {
    let presentTime = timer.innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = checkMinute(timeArray[0] - 0);
    let s = checkSecond((timeArray[1] - 1));
  
    if(s==59){
      m=m-1;
      if(m<10){
        m="0"+m;
      }
    }
    
    timer.innerHTML = m + ":" + s;
    document.title = timer.innerText;
    timerName = setTimeout(startTimer, 1000);
  
    if(m==0 && s==0){
      myStopFunction();
      start.disabled = false;
      isNull = true;
      points += 25;
      audio.innerHTML = `<iframe width="400p" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89201472&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
    `;
      pointsContainer.innerHTML = "FlowPoints: " + points;
    }
  }
  
  // ------- If Stop is Pressed, reset Clock -------- //
  function myStopFunction() {
      clearTimeout(timerName);
  }
  
  // ------- Timer Minute & Seconds Display -------- //
  function checkMinute(min){
    if(min<=9){
      min = "0" + min;
    }
    return min;
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
    if (sec < 0) {sec = "59"};
    return sec;
  }
  
  })();
 */