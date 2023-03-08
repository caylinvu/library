let myLibrary = [];
let title = '';
let author = '';
let pages = '';
let isRead = '';

// object constructor function
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    switch(this.isRead) {
        case "true":
            return this.title + " by " + this.author + ", " + this.pages + " pages, read";
            break;
        case "false":
            return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
            break;
        default:
            return "Book info is not valid";
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'false')
console.log(theHobbit.info())

// function to prompt user to add a book to the library
function addBookToLibrary() {
    title = prompt('What is the title of the book?', '');
    author = prompt('Who is the author of the book?', '');
    pages = prompt('How many pages are in the book?', '');
    isRead = prompt('Have you read the book?', '');
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    // console.log(newBook);
    console.log(newBook.info());
    console.log(myLibrary);
}


addBookToLibrary();
addBookToLibrary();
addBookToLibrary();