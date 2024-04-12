
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});





// // Find the 5th book in series
// fetch("https://anapioficeandfire.com/api/books")
//   .then((response) => response.json())
//   .then((json) => {
//     const books = json
//     const fifthBook = books[4] 
//       console.log(fifthBook)
//   })

//   // Find 1031st character in the series

// // Find total number of pages in all books
//   fetch("https://anapioficeandfire.com/api/books")
//   .then((response) => response.json())
//   .then((json) => {
//     const books = json
//     let totalPages = 0

//     books.forEach((book) => {
//       totalPages += book.numberOfPages
//     }) 
//       console.log("Total number of pages:", totalPages)
//   })

