// listar livros nao lidos

const listOfBooks = require("../database.js");
const read = require("readline-sync");

const wishlist = () => {
  const initialOption = read.question("Want to print the wishlist? Y/N").toUpperCase();
  if (initialOption === "Y") {
    const unreadBooks = listOfBooks.filter((book) => !book.read);
    return unreadBooks.map((book) => console.log(book.title));
  } else {
    console.log("Go back to the MENU")
  }
};

module.exports = wishlist;
