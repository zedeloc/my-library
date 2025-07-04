const myLibrary = [];

class Book {
    constructor(title, author, pages, genre, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.read = read;
}
    id = crypto.randomUUID();
    shortDescription() {
        return `${this.title} is a ${this.genre} book by ${this.author}. It contains ${this.pages} pages and you ${this.isRead()}`;
    }

    isRead() {
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
}

// List books in order from newest to oldest
function stockShelf() {
    for (i = myLibrary.length - 1; i >= 0; i--) {
        printBook(myLibrary[i])
    }
}

function clearShelf() {
    let allBooks = bookShelf.querySelectorAll(".book")
    for (eachBook of allBooks) {
        eachBook.remove()
    }
}

function printBook(currentBook) {
    // create html for the book
    let book = document.createElement("div");
    book.classList.add("book", "grid_item");
    let title = document.createElement("div")
    title.classList.add("title", "grid_item")
    let author = document.createElement("div");
    author.classList.add("author", "grid_item")
    let genre = document.createElement("div");
    genre.classList.add("genre", "grid_item")
    let pages = document.createElement("div");
    pages.classList.add("pages", "grid_item")
    let read = document.createElement("div");
    read.classList.add("read", "grid_item")
    let readButton = document.createElement("button")
    readButton.classList.add("read-toggle");
    let deleteButton = document.createElement("span");
    deleteButton.classList.add("material-icons", "md-24", "delete-button")
    let readButtonInstructions = document.createElement('span');
    readButtonInstructions.classList.add("read-instructions")
    
    // save unique id
    const id = currentBook.id;

    deleteButton.addEventListener("click", () => {

        myLibrary.splice(findBookById(id), 1);
        book.remove()

    })

    readButton.addEventListener("click", () => {
        bookIndex = findBookById(id)
        if (myLibrary[bookIndex]["read"] === "true") {
            myLibrary[bookIndex]["read"] = "false";
        } else {
            myLibrary[bookIndex]["read"] = "true";
        }
        clearShelf()
        stockShelf()
    })

    // Load content onto page
    title.textContent = "Title: " + currentBook.title;
    author.textContent = "Author: " + currentBook.author;
    genre.textContent = "Genre: " + currentBook.genre;
    pages.textContent = "Pages: " + currentBook.pages;
    read.textContent = "Read: "
    readButton.textContent = currentBook.read;
    readButtonInstructions.textContent = "<-- click to change"
    deleteButton.textContent = "delete_forever";

    read.appendChild(readButton);
    read.appendChild(readButtonInstructions);
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

// Test book
let book1 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", "70", "portal fantasy", "true");

// Get the form elements and data
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newGenre = document.querySelector("#genre");
let newRead = document.querySelector("#read");
let submitButton = document.querySelector("#submit-button");
let bookShelf = document.querySelector(".shelf");
let addNewBookButton = document.querySelector(".add-new-book-button")
let submitNew = document.querySelector(".submit-new")

// Toggle "add new book" button and form
addNewBookButton.addEventListener("click", () => {
    submitNew.style.display = "grid";
    addNewBookButton.style.display = 'none';
})

submitButton.addEventListener("click", () => {
    addBookToLibrary()
    clearForm()
    clearShelf()
    stockShelf()
    submitNew.style.display = "none";
    addNewBookButton.style.display = "block"

})

