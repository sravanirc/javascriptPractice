//this function takes 2 paramentes, an array and a test function to perform on the array elements. 
const myFilterFunction = (arr, fn)=>{
    let resultArr =[];
    for(i=0;i<arr.length;i++){ // for each array element, if the test is true, then push it to a resultArray. 
        if(fn(arr[i])){
        resultArr.push(arr[i]);
        }
        else continue;
    }
 return resultArr;
}


// this is an array with few words 6 letter long.
let myArray = [
    "Apples",
    "Mango",
    "Chairs",
    "Elephant",
    "Computer",
    "Pizzas",
    "Sunshine",
    "Butter",
    "Strawberry",
    "Library"
  ];
let result = myFilterFunction(myArray, (ele)=> (ele.length==6 ? true : false)); // invoking my filter function with the test that lenght of word is more than 
console.log(`words that contain atleast 6 letters are: ${result}`);