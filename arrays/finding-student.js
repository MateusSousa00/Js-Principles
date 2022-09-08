const students = ['João', 'Juliana', 'Caio', 'Ana'];
const studentsAverage = [10, 7, 9, 6]

let gradesAndStudensList = [students, studentsAverage]

const showNameAndGrade = (studentName) => {
    if(gradesAndStudensList[0].includes(studentName)) {
        let index = gradesAndStudensList[0].indexOf(studentName);
        return `${gradesAndStudensList[0][index]} your average is ${gradesAndStudensList[1][index]}`;
    } else {
        return "Could not identify student";
    }
}

console.log(showNameAndGrade('Juliana'))