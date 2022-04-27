// Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.

const listOfBooks = require("../database.js");
const read = require("readline-sync");

const sortBooks = () => {
  const initialOption = read.question("Want to sort the books? Y/N").toUpperCase();
  if (initialOption === "Y") {
    const sortedBooks = listOfBooks.sort((book1, book2) => book1.pages > book2.pages);
    console.log(sortedBooks);
  } else {
    console.log("Go back to the MENU")
  }
};

module.exports = sortBooks;
