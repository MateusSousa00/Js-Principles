const grades = [10, 9, 8, 7, 6];

const newGrades = grades.map(grade => grade == 10 ? grade : ++grade);

console.log(newGrades)