const booksList = require("./disorder-list");
const changePos = require("./find-minors");

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let currentIndex = partition(arr, left, right);
    if (left < currentIndex -1) {
        quickSort(arr, left, currentIndex -1);
    }
    if (currentIndex < right) {
        quickSort(arr, currentIndex, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let currentLeft = left;
  let currentRight = right;

  while (currentLeft <= currentRight) {
    while (arr[currentLeft].value < pivot.value) {
      currentLeft++;
    }

    while (arr[currentRight].value > pivot.value) {
      currentRight--;
    }

    if (currentLeft <= currentRight) {
      changePos(arr, currentLeft, currentRight);
      currentLeft++;
      currentRight--;
    }
  }
  return currentLeft;
}

console.log(quickSort(booksList, 0, booksList.length - 1));
