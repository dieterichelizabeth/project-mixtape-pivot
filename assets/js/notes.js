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
Done Step 2: create general HTML setup
    - title, div for the youtube video + image
    - allow user to add the task they wish to work on, start button for timer
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