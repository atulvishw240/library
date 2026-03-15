const library = [];
let counter = 0;

function Book(id, title, author, noOfPages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = id;
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, noOfPages, isRead) {
  id = crypto.randomUUID();
  book = new Book(id, title, author, noOfPages, isRead);
  library.push(book);
}

addBookToLibrary("Eloquent Ruby", "Russ Olsen", 338, true);
addBookToLibrary("Practical OOD in Ruby", "Sandi Metz", 336, true);
addBookToLibrary("99 Bottles of OOP", "Kathrina Owen", 336, false);
addBookToLibrary("High Performance SQL", "Andrew Atkinson", 454, false);

displayBooks();

function displayBooks() {
  for (counter; counter < library.length; counter++) {
    display(library[counter]);
  }
}

function display(book) {
  const content = document.querySelector(".content");
  const card = createCard();

  appendBookTitle(card, book);
  appendBookAuthor(card, book);
  appendBookPages(card, book);
  appendReadButton(card, book);
  appendRemoveButton(card, book);

  content.appendChild(card);
}

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("flex-column");

  return card;
}

function appendBookTitle(card, book) {
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("card-item");
  bookTitle.textContent = book.title;
  card.appendChild(bookTitle);
}

function appendBookAuthor(card, book) {
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("card-item");
  bookAuthor.textContent = book.author;
  card.appendChild(bookAuthor);
}

function appendBookPages(card, book) {
  const noOfPagesInBook = document.createElement("div");
  noOfPagesInBook.classList.add("card-item");
  noOfPagesInBook.textContent = book.noOfPages + " pages";
  card.appendChild(noOfPagesInBook);
}

function appendReadButton(card, book) {
  const readBtn = document.createElement("button");
  readBtn.classList.add("read");

  if (book.isRead) {
    readBtn.textContent = "Read";
  } else {
    readBtn.classList.add("not-read");
    readBtn.textContent = "Not Read";
  }

  card.appendChild(readBtn);
}

function appendRemoveButton(card, book) {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.textContent = "Remove";
  card.appendChild(removeBtn);

}


const newBookBtn = document.querySelector(".new-book");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

newBookBtn.addEventListener("click", displayForm);
backdrop.addEventListener("click", () => {
  clearFormFields();
  hideForm();
});

function displayForm() {
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");  
}

function hideForm() {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
}


const submit = document.querySelector(".submit");
submit.addEventListener("click", submitForm);

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("read-or-not");

function submitForm(event) {
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readCheckbox.checked);
  displayBooks();
  clearFormFields();

  modal.classList.add("hidden");
  backdrop.classList.add("hidden");

  event.preventDefault();
}

function clearFormFields() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}


const readBtns = document.querySelectorAll(".read");
readBtns.forEach((readButton) => {
  readButton.addEventListener("click", () => {
    readButton.classList.toggle("not-read");
    setButtonText(readButton);
  })
});

function setButtonText(readButton) {
  const btnText = readButton.textContent;

    if (btnText === "Read") {
      readButton.textContent = "Not Read";
    } else {
      readButton.textContent = "Read";
    }
}

const removeBtns = document.querySelectorAll(".remove");
removeBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", () => {
    deleteBook(removeBtn);
  });
});

function deleteBook(removeBtn) {
  const parent = removeBtn.parentNode;
  const contentContainer = document.querySelector(".content");

  contentContainer.removeChild(parent);
}
