console.log("Hello, world!")

const myLibrary = [];

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
    this.id = crypto.randomUUID();
    this.shortDescription = function () {
        return `${this.title} is a ${this.genre} book by ${this.author}. It contains ${this.pages} pages and you ${this.isRead()}`;
    }

    this. isRead = function () {
        if (this.read === "true") {
            return "have already read it.";
        } else {
            return "have not read it yet. How exciting!";
        }
    }

}

function addBookToLibrary() {
    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newGenre.value, newRead.value);
    myLibrary.push(newBook)
}

function clearForm() {
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    newGenre.value = "";
    // newRead.value = "";
}

function stockShelf() {
    for (item of myLibrary) {
        printBook(item)
    }
}

function clearShelf() {
    let allBooks = bookShelf.querySelectorAll(".book")
    for (eachBook of allBooks) {
        eachBook.remove()
    }
}

function printBook(currentBook) {
    let book = document.createElement("div");
    book.className = "book";
    let title = document.createElement("div")
    title.className = "title";
    let author = document.createElement("div");
    author.className = "author";
    let genre = document.createElement("div");
    genre.className = "genre";
    let pages = document.createElement("div");
    pages.className = "pages";
    let read = document.createElement("div");
    read.className = "read";
    let deleteButton = document.createElement("span");
    deleteButton.classList.add("material-icons", "md-24")
 
    

    deleteButton.addEventListener("click", () => {
        const id = currentBook.id;
        myLibrary.splice(findBookById(id), 1);
        book.remove()

    })


    title.textContent = currentBook.title;
    author.textContent = "Author: " + currentBook.author;
    genre.textContent = "Genre: " + currentBook.genre;
    pages.textContent = "Pages: " + currentBook.pages;
    read.textContent = "Read: " + currentBook.read;
    deleteButton.textContent = "delete_forever";

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(genre);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(deleteButton)
    bookShelf.appendChild(book);

}

function findBookById(id) {
    return myLibrary.findIndex(book => book.id === id);
}

let book1 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", "70", "portal fantasy", "true");

let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newGenre = document.querySelector("#genre");
let newRead = document.querySelector("#read");
let submitButton = document.querySelector("#submit-button");
let bookShelf = document.querySelector(".shelf");

submitButton.addEventListener("click", () => {
    addBookToLibrary()
    clearForm()
    clearShelf()
    stockShelf()

})

