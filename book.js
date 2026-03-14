const library = [];

function Book(id, title, author, noOfPages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = id;
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRread = isRead;
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

library.forEach(myFunction);

function myFunction(item) {
  const content = document.querySelector(".content");

  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("flex-column");

  const cardItem1 = document.createElement("div");
  cardItem1.classList.add("card-item");
  cardItem1.textContent = item.title;
  card.appendChild(cardItem1);

  const cardItem2 = document.createElement("div");
  cardItem2.classList.add("card-item");
  cardItem2.textContent = item.author;
  card.appendChild(cardItem2);

  const cardItem3 = document.createElement("div");
  cardItem3.classList.add("card-item");
  cardItem3.textContent = item.noOfPages + " pages";
  card.appendChild(cardItem3);

  const read = document.createElement("button");
  read.classList.add("read");
  read.textContent = "Read";
  card.appendChild(read);

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "Remove";
  card.appendChild(remove);

  content.appendChild(card);
}

const newBookBtn = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

newBookBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
});

backdrop.addEventListener("click", () => {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
});
