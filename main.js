console.log("Hello, world!")

const myLibrary = [];

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
    this.shortDescription = function () {
        return `${this.title} is a ${this.genre} book by ${this.author}. It contains ${this.pages} pages and you ${this.isRead()}`;
    }

    this. isRead = function () {
        if (this.read) {
            return "have already read it.";
        } else {
            return "have not read it yet. How exciting!";
        }
    }

}

let book1 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 70, "portal fantasy", true);