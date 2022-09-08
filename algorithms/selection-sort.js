const books = require('./books-list');
const cheapValue = require('./cheap-value');

for (let current = 0; current < books.length - 1; current++) {
    let cheap = cheapValue(books, current);
    
    let currentBook = books[current];
    console.log('start pos:', current)
    console.log('current book:', books[current])
    let cheapestBook = books[cheap];
    console.log('cheapest book:', books[cheap])

    books[current] = cheapestBook;
    books[cheap] = currentBook;
}

console.log(books);