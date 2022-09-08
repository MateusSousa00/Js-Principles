const grades = [10, 7, 8, 5, 10];
grades.pop()
console.log(grades) //[10, 7, 8, 5]

let average = (grades[0] + grades[1] + grades[2] + grades[3]) / grades.length;

console.log(`Average is: ${average}`) //7.5