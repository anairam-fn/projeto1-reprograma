// por categoria
const listOfBooks = require("../database.js");
const read = require("readline-sync");

const searchBooks = () => {
  const initialOption = read.question("Want to search by category? Y/N").toUpperCase();
  console.log(initialOption);
  if (initialOption === "Y") {
    const categories = listOfBooks.map((book) => {
      return book.category;
    });
    console.log(categories);

    const inputCategory = read.question(
      "Type a category according to the table above");
    const confirmation = read.question("Are sure? Y/N ").toUpperCase();
        
    if (confirmation === "Y") {
      const filteredBooks = listOfBooks.filter((book) => book.category === inputCategory);
      console.log(filteredBooks);
    }
  } else {
    console.log("Go back to the MENU")
  }
};

module.exports = searchBooks;
