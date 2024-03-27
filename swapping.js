function swapTheDigits() {
    let givenNumber =document.getElementById("userNumber").value;
    let len = givenNumber.length;
    let swappedNumber=[];
    
    // Checking if the given input is a number and exaclty 3 digits long 
     if(isNaN(givenNumber) || len<3 ){
        alert("Please enter a valid number thats atleast 3 digit long!")
      }
      
      else{
        let j=1; // This is a variable to access the last digits of givenNumber
       
        //looping through all the digits of given number
        for(let i=0; i<len; i++){
       
            // copying all the digits except last 2 of givenNumber into swappedNumber
            if(i<(len-2))
            {
                swappedNumber[i]=givenNumber[i];
            }
            // once the loop reaches the last but one digit of givenNumber.
            // copying the digits in reverse using the j variable declared on line 11.
            else{
               swappedNumber[i] = givenNumber[len-j];
                j++;
             }
        }
        let finalResult = swappedNumber.join('');
        document.getElementById("result").innerText= `You entered ${givenNumber}. The result with the last 2 digits swapped is ${finalResult}`;
    }
}