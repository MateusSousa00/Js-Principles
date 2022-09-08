const books = require("./books-list");

function insertionSort(list) {
  for (let current = 0; current < list.length; current++) {
    let check = current;
    while (check > 0 && list[check].value < list[check - 1].value) {
      let checkItem = list[check];
      let previousItem = list[check - 1];

      list[check] = previousItem;
      list[check - 1] = checkItem;

      check--;
    }
  }
  console.log(list);
}

insertionSort(books)
