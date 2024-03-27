
let findSum = (numArray) => {
    let len=numArray.length;
    let sum = 0;
    for(let i=0;i<len; i++){
        sum = sum + numArray[i];
    }
    return sum;
}

let subtractNumbers = (a,b) => a-b;
let multiplyNumbers = (a,b) => a*b;

let divideNumbers = (a,b) =>{
// checking the second argument to avoid division by zero error.
    if(b==0){
        return ":Cannot divide by 0!";
    }
    else return (a/b); 
}

let numList = [1,2,0];

console.log(`The sum of ${numList} is ${findSum(numList)}`);
console.log(`The difference between first and second number of ${numList} is ${subtractNumbers(numList[0],numList[1])}`);
console.log(`The product of third number and first number of  ${numList} is ${multiplyNumbers(numList[2],numList[0])}`);
console.log(`The result of dividing the sum of ${numList} by the third number is ${divideNumbers(findSum(numList),numList[2])}`);