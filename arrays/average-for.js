const grades = [10, 6.5, 8, 7.5];
let sumOfGrades = 0;
let anotherSumOfGrades = 0;

//for
for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
}

//forEach
grades.forEach( grade => {
    anotherSumOfGrades += grade
})

let average = sumOfGrades/grades.length
let anotherAverage = anotherSumOfGrades/grades.length;

console.log(average);
console.log(anotherAverage);