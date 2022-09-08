let x = "";
console.log(x);
x = "hi";

//declare function
function printText(text) {
  console.log(text);
}

//execute function
printText("oi"); //oi
printText("another text"); //another text

//another way to code functions

function sum() {
  return 2 + 2;
}

const newSum = function (num1, num2) {
  return num1 + num2;
};

const arrowSum = (num1, num2) => num1 + num2;

const sumLittleNumbers = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "only numbers from 1 to 9";
  } else {
    return num1 + num2
  }
};
