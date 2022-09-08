const userlogged = true;
const billPaid = true;

//truthy or falsy
//0 => false && 1 => true

console.log(0 == false); //true
console.log(1 == true); //true
console.log("" == false); //true

//null => empty or nothing

let myVar;
let varNull = null;

console.log(myVar); //undefined
console.log(varNull); //null

let number = 3;
let text = "Alura";

console.log(typeof number); //number
console.log(typeof text); //string 
console.log(typeof myVar); //undefined
console.log(typeof varNull); //object