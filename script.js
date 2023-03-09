const bookContainer = document.querySelector('.book-container');
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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'false');
const gameOfThrones = new Book('A Game of Thrones', 'George R.R. Martin', '694', 'false');
const eyeOfTheWorld = new Book('The Eye of the World', 'Robert Jordan', '832', 'false');
const wildBuilt = new Book('A Psalm for the Wild-Built', 'Becky Chambers', '160', 'true');
const moreOfLess = new Book('The More of Less', 'Joshua Becker', '203', 'false');
const dinosaurs = new Book('The Rise and Fall of the Dinosaurs', 'Steve Brusatte', '360', 'false');
const sixthExtinction = new Book('The Sixth Extinction', 'Elizabeth Kolbert', '290', 'false');

myLibrary.push(theHobbit, gameOfThrones, eyeOfTheWorld, wildBuilt, moreOfLess, dinosaurs, sixthExtinction);

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

// function to loop through array of books and display each book
function displayBooks() {
    // *NOTE* maybe change to forEach() loop so I can use index of the library array to remove books
    for (book of myLibrary) {
        let bookCard = document.createElement('div');
        bookCard.classList.add("book-card");
        bookContainer.appendChild(bookCard);

        let titleDisplay = document.createElement('div');
        let authorDisplay = document.createElement('div');
        let pageDisplay = document.createElement('div');
        let isReadButton = document.createElement('button');
        let removeButton = document.createElement('button');

        bookCard.appendChild(titleDisplay);
        bookCard.appendChild(authorDisplay);
        bookCard.appendChild(pageDisplay);
        bookCard.appendChild(isReadButton);
        bookCard.appendChild(removeButton);

        titleDisplay.textContent = book.title;
        authorDisplay.textContent = book.author;
        pageDisplay.textContent = book.pages;
        isReadButton.textContent = 'Read';
        removeButton.textContent = 'Remove';

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