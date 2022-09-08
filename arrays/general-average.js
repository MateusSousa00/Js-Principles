const roomJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const roomJava = [6, 5, 8, 9, 5, 6];
const roomPython = [7, 3.5, 8, 9.5];

function averageRoom(roomGrades) {
  const sumOfGrades = roomGrades.reduce(
    (getter, current) => current + getter,
    0
  );
  return sumOfGrades / roomGrades.length;
}

console.log(`Average JS room: ${averageRoom(roomJS)}`);
console.log(`Average Java room: ${averageRoom(roomJava)}`);
console.log(`Average Python room: ${averageRoom(roomPython)}`);

const grades = [10, 6.5, 8, 7];

const average =
  grades.reduce((getter, current) => current + getter, 0) / grades.length;

console.log(average)