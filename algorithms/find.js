const anotherBooksList = require('./another-books-list');

function find(arr, from, to, searchedValue) {
    const middle = Math.floor((from + to) / 2);
    const current = arr[middle];

    if (from > to) {
        return -1;
    }

    if (searchedValue === current.value) {
        return middle;
    }

    if (searchedValue < current.value) {
        return find(arr, from, middle - 1, searchedValue);
    }


    if (searchedValue > current.value) {
        return find(arr, middle + 1, to, searchedValue)
    }
}

console.log(find(anotherBooksList, 0, anotherBooksList.length, 40))