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
    // console.log(newBook.info());
    // console.log(myLibrary);
}


addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

// function to loop through array of books and display each book
function displayBooks() {
    // *NOTE* maybe change to forEach() loop so I can use index of the library array to remove books
    for (book of myLibrary) {
        console.log(book);
    }
}

displayBooks();

// TO DO!!!!!

// Add dummy books to array

// Add HTML and CSS to format cards on page

// Update JS to show correct info on cards

// Add "NEW BOOK" button and figure out how to bring up a form for inputting book info

// Format form and fix error when trying to submit (event.preventDefault();)

// Add button on each book's display to remove the book from the library

// Add button on each book's display to change it's read status

// Finish UI!!!!!!!!!!!!!