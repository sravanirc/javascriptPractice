// Construction function for an object
class Shoes{
constructor(name , productCode, quantity, price){
this.name = name.toLowerCase();
this.productCode = productCode;
this.quantity = quantity;
this.price = price;
}
}
//creating 5 instances of shoes with random values
let shoes1 = new Shoes("swift","SS123",120,100);
let shoes2 = new Shoes("Flexfit","FF456",90,100);
let shoes3 = new Shoes("AirGlide","AG789",150,55);
let shoes4 = new Shoes("Powerpulse","PX123",110,65);
let shoes5 = new Shoes("ultravent","UV123",110,60);

//added all the instances of shoes into an array
let allShoes = [];
allShoes.push(shoes1);
allShoes.push(shoes2);
allShoes.push(shoes3);
allShoes.push(shoes4);
allShoes.push(shoes5);

// Defining all the functions below

//findShoe function allows us to search and find a shoe by its name from the given array
function findShoe(arr, name){
    name=name.toLowerCase();
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].name == name){
        res.push(arr[i]);
         }
        }
        return res;
    }

//cheapest function return the shoe with cheapest value from the array
function cheapest(arr){
    let cheapestValue= arr[0].price;
    let cheapShoes = [];
    arr.forEach( (shoe) => {
        if (shoe.price <= cheapestValue) {
            cheapestValue = shoe.price;}
           });
    arr.forEach((shoe)=>{
       if(shoe.price==cheapestValue){
        cheapShoes.push(shoe);
       }});

    return cheapShoes;
}

//priciest function returns the shoe with highest value from the array
function priciest(arr){
    let highestValue= arr[0].price;
    let costlyShoes = [];
    arr.forEach( (shoe) => {
        if (shoe.price >= highestValue) {
            highestValue = shoe.price;}
           });
    arr.forEach((shoe)=>{
       if(shoe.price==highestValue){
        costlyShoes.push(shoe);
       }});

    //return cheapShoes;
    return costlyShoes;
}

//editShoes function allows user to edit all values of shoes with given value
function editShoes(arr, value1){
let edited = JSON.parse(JSON.stringify(arr));
for(let i=0;i<edited.length;i++){
let keys = Object.keys(edited[i]);
keys.forEach(key => {edited[i][key] = value1;
});
}
return edited;
}

// sortShoes function return a sorted list of shoes in ascending order of shoes value per unit.  
function sortShoes(array){
let arr = [...array];
let sortedarr = [];
for(let i=0;i<arr.length;i++){
    sortedarr.push(arr[i].price);
}

let newarr= sortedarr.sort((a, b)=> a-b);
console.log(newarr);
for(let i=0; i<newarr.length; i++){
    for(let j=0;j<arr.length;j++){ 
        if(newarr[i]==arr[j].price){
    sortedarr[i]=arr[j];
    arr.splice(j,1);
}     
}
}
return sortedarr;
}

// const sortedArr = (allShoes) => { allShoes.sort((a, b)=> a[2]-b[2])
//    return allShoes;
// }

// Calling all the above declared functions
console.log(`Originial list of all shoes::`);
console.table(allShoes); 
console.log(`Result after searching for 'Swift' shoes::: `)
console.table(findShoe(allShoes,"Swift"));
console.log(`Cheapest of all shoes is::`);
console.table(cheapest(allShoes));
console.log(`Priciest of all the shoes is: `);
console.table(priciest(allShoes));
console.log(`Edited new values of all the shoes is: `);
console.table(editShoes(allShoes, "abc"));
console.log(`Sorted list of all the shoes in ascending order is: `);
console.table(sortShoes(allShoes));
// console.log(`Sorted list of all the shoes in ascending order is: `);
 console.table(allShoes);