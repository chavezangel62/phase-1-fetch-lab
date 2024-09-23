// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
const fetchBooks = () => {

   return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(bookdata => {
      renderBooks(bookdata);      //use console.log() and debugger to help with issues
    })
    .catch(error => {
      console.alert('Error fetching data!', error);
    });
};

fetchBooks();         // Don't foget to invoke on function expressions.

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
