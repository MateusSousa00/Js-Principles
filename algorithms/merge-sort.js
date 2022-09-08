const booksList = require('./disorder-list');

function mergeSort(arr) {
    if(arr.length > 1) {
        const middle = Math.floor(arr.length / 2);
        const startArr = mergeSort(arr.slice(0, middle));
        const endArr = mergeSort(arr.slice(middle, arr.length));
        arr = sort(startArr, endArr);
    }

    return arr;
}

function sort(startArr, endArr) {
    let currentPos1 = 0;
    let currentPos2 = 0;
    const result = [];

    while(currentPos1 < startArr.length && currentPos2 < endArr.length) {
        let currentProduct1 = startArr[currentPos1];
        let currentProduct2 = endArr[currentPos2];

        if(currentProduct1.value < currentProduct2.value) {
            result.push(currentProduct1);
            currentPos1++;
        } else {
            result.push(currentProduct2);
            currentPos2++;
        }
    }

    return result.concat(currentPos1 < startArr.length ? startArr.slice(currentPos1) : endArr.slice(currentPos2))
}

console.log(mergeSort(booksList));