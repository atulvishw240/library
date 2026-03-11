const myLibrary = [];

function Book(id, title, author, noOfPages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = id;
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRread = isRead;

  this.info = function() {
    string = isRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${string}`;
  }
}

function addBookToLibrary(title, author, noOfPages, isRead) {
  id = crypto.randomUUID();
  book = new Book(id, title, author, noOfPages, isRead);
  myLibrary.push(book);
}

addBookToLibrary("Eloquent Ruby", "Russ Olsen", 338, true);
addBookToLibrary("Practical OOD in Ruby", "Sandi Metz", 336, true);
addBookToLibrary("99 Bottles of OOP", "Kathrina Owen", 336, false);
addBookToLibrary("High Performance PostgreSQL for Rails", "Andrew Atkinson", 454, false);
