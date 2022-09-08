const minimumAge = 18;
const clientAge = 16;

if (clientAge >= minimumAge) {
    console.log('beer');
} else {
    console.log('juice');
}

//ternary
console.log(clientAge >= minimumAge ? "beer" : "juice");