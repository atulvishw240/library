const myLibrary = [];

function Book(id, title, author, noOfPages, isRead) {
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