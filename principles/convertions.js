//type of data
//boolean

//implicit convertion

const number = 456;
const stringNumber = "456";

console.log(number === stringNumber) //false: compare type and content
console.log(number == stringNumber) //true: compare content
console.log(number + stringNumber) //456456 //concatenate

//explicit convertion

console.log(number + Number(stringNumber)) //912
console.log(number.toString() === stringNumber) //true