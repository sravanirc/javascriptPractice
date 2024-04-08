// Code here for the callbacks task

// Setting variables to hold the intervalID
 // and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
   intervalID = setInterval(()=>console.log(`${++counter}`), 1000 ); // this will increment the counter variable and print it to console every sec
}

function stopCounter() {
  clearInterval(intervalID); // stops the counter and clears the interval returned by setInterval. 
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);

// The event listener below is missing a callback function argument;
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);