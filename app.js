const read = require("readline-sync");

const searchBooks = require("./controllers/buscarLivros");
const wishlist = require("./controllers/listarLivrosNaoLidos");
const listRecommendedBooks = require("./controllers/listarRecomendados")
const sortBooks = require("./controllers/listarLivrosOrdenados")

const answer = read.question(`
// =================== MENU ===================

// 1 - CATEGORY: search book by category;
// 2 - ORDER: sort books by number of pages;
// 3 - RECOMMENDED: search recommended books;
// 4 - WISHLIST: search unread books;

// 5 - EXIT;

// ============================================

// Enter a number [1-5]: 
// `);

//Quando a pessoa escolher a opção 1, eu quero que o js chame a função que vai estar no meu arquivo buscarLivro.js

switch (answer) {
  case "1":
    searchBooks();
    break;
  case "2":
    sortBooks()
    break;
  case "3":
    listRecommendedBooks();
    break;
  case "4":
    wishlist();
    break;
  default:
    console.log("Fim do algoritmo");
    break;
}