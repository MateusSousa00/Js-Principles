const names = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const grades = [7, 4.5, 8, 7.5];

const failed = names.filter((_, index) => grades[index] < 5);
console.log(`failed: ${failed}`)