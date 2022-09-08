const books = require('./books-list');

function cheapValue(arr, startPos) {
  let cheap = startPos;

  for (let current = startPos; current < arr.length; current++) {
    if (arr[current].value < arr[cheap].value) {
      cheap = current;
    }
  }
  return cheap;
}

module.exports = cheapValue;