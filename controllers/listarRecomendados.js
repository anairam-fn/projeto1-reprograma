// livros recomendados

const listOfBooks = require("../database.js");
const read = require("readline-sync");

const listRecommendedBooks = () => {
    const initialOption = read.question("Want to print recommended books? Y/N ").toUpperCase()
    if (initialOption === "Y") {
        const recommendedBooks = listOfBooks.filter((book) => book.recommends)
        return recommendedBooks.map(book => console.log(book.title))
    } else {
        console.log("Go back to the MENU")
      }
}

module.exports = listRecommendedBooks;