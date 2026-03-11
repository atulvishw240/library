const myLibrary = [];

function Book(title, author, noOfPages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.read = read;

  this.info = function() {
    string = read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${string}`;
  }
}