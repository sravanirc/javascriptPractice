function isPalindrome() {
    let givenWord =document.getElementById("userWord").value;
    let wordToLower = givenWord.toLowerCase(); // converting the givenword to its lowercase
    let len = wordToLower.length;
    let swappedWord=[]; // new array to store reversed word
    let iterator =0;
        while(iterator<len){
       
            // copying all the letters in reverse from givenWord to swappedWord
             swappedWord[iterator]=wordToLower[(len-1)-iterator];
             iterator++;
            }
        swappedWord = swappedWord.join('');
     // checking if the givenWord is same as its reversed
    if(wordToLower==swappedWord){
        document.getElementById("result").innerText= `${givenWord} is a Palindrome.`;
    }
    else{
        document.getElementById("result").innerText= `${givenWord} is Not a Palindrome.`; 
    }
        
    }
