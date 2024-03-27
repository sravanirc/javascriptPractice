let hide = (str) =>{
    let hideLocation = str;

   return function seek(){
        console.log(hideLocation); // expected result: to print value of hideLocation as this function has access to its parent functions variable scope. 
        return hideLocation;
    }
}
// the below statement gives error while executing. uncomment to view the result.
// console.log(hideLocation); //expected error : undefined as hideLocation is a localVariable declared inside hide function

let startGame = hide("office");
console.log(`${startGame()}`);

// The reason for this result is that the seek function has access to the variable declared in its parent scope. 