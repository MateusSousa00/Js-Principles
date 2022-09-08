const { books1, books2 } = require('./books-list');

function joinLists(list1, list2) {
    let finalList = [];
    let currentPosList1 = 0;
    let currentPosList2 = 0;
    let current = 0;

    while(currentPosList1 < list1.length && currentPosList2 < list2.length) {
        let currentProductList1 = list1[currentPosList1];
        let currentProductList2 = list2[currentPosList2];

        if (currentProductList1.value < currentProductList2.value) {
            finalList[current] = currentProductList1;
            currentPosList1++;
        } else {
            finalList[current] = currentProductList2;
            currentPosList2++;
        }

        current++;
    }

    while(currentPosList1 < list1.length) {
        finalList[current] = list1[currentPosList1];
        currentPosList1++;
        current++;
    }

    while(currentPosList2 < list2.length) {
        finalList[current] = list2[currentPosList2];
        currentPosList2++;
        current++;
    }

    return finalList;
}

console.log(joinLists(books1, books2));