const booksList = require("./disorder-list");

function findMinors(pivot, arr) {
  let minors = 0;

  for (let current = 0; current < arr.length; current++) {
    let currentProduct = arr[current];
    if (currentProduct.value < pivot.value) {
      minors++;
    }
  }
  changePos(arr, arr.indexOf(pivot), minors);
  return arr;
}

function changePos(arr, from, to) {
    const elem1 = arr[from];
    const elem2 = arr[to];

    arr[to] = elem1;
    arr[from] = elem2;
}

function breakOnPivot(arr){
    let pivot = arr[Math.floor(arr.length/ 2)];
    findMinors(pivot,arr);
    let minorValues = 0;

    for (let checking = 0; checking < arr.length; checking++) {
        let current = arr[checking];
        if(current.value < pivot.value && current !== pivot) {
            changePos(arr, checking, minorValues);
            minorValues++;
        }
    }

    return arr;
}

module.exports = changePos;
console.log(breakOnPivot(booksList));