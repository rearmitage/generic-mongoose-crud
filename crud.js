//const router = require('express').Router();

function Book(title) {
  var title = title;
  var getTitle = function () {
    return title;
  };
  return {
    currentTitle: getTitle
  };
}

var myBook = Book('War and Peace');
var anothaOne = Book("Eragon");
console.log(myBook.currentTitle());
console.log(anothaOne.currentTitle());

