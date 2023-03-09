const bookContainer = document.querySelector('.book-container');
const form = document.querySelector('.form-popup');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('is-read');
const submitButton = document.getElementById('submit-btn');
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

/* Book.prototype.info = function () {
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
} */

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
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    isRead = isReadInput.checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    
    while(bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }

    displayBooks();
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
        bookContainer.appendChild(addBookButton);

        let bookInfo = document.createElement('div');
        let buttonContainer = document.createElement('div');
        bookInfo.classList.add("book-info");
        buttonContainer.classList.add("button-container");
        bookCard.appendChild(bookInfo);
        bookCard.appendChild(buttonContainer);

        let titleDisplay = document.createElement('div');
        let authorDisplay = document.createElement('div');
        let pageDisplay = document.createElement('div');
        let isReadDisplay = document.createElement('div');
        let removeDisplay = document.createElement('div');
        bookInfo.appendChild(titleDisplay);
        bookInfo.appendChild(authorDisplay);
        bookInfo.appendChild(pageDisplay);
        buttonContainer.appendChild(isReadDisplay);
        buttonContainer.appendChild(removeDisplay);

        let isReadButton = document.createElement('button');
        let removeButton = document.createElement('button');
        isReadDisplay.appendChild(isReadButton);
        removeDisplay.appendChild(removeButton);

        titleDisplay.textContent = book.title;
        authorDisplay.textContent = book.author;
        pageDisplay.textContent = book.pages + ' pages';
        isReadButton.textContent = 'Read';
        removeButton.textContent = 'Remove';
    }
}

// create add book button
let addBookButton = document.createElement('button');
addBookButton.classList.add("add-book-btn");
let buttonText = document.createElement('div');
buttonText.textContent = 'Add Book';
let plusImage = document.createElement('img');
plusImage.src = "images/plus.svg";

// create pop up form
addBookButton.setAttribute('onclick', 'openForm()');

// function to display pop up form
function openForm() {
    form.style.display = "block";
}

// function to close pop up form
function closeForm() {
    form.style.display = "none";
}

addBookButton.appendChild(plusImage);
addBookButton.appendChild(buttonText);
displayBooks();

submitButton.addEventListener('click', (e) => {
    addBookToLibrary();
    closeForm();
    e.preventDefault();

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    isReadInput.checked = false;
})

// TO DO!!!!!

// Update JS to show correct info on cards

// Format form and fix error when trying to submit (event.preventDefault();)

// Add button on each book's display to remove the book from the library

// Add button on each book's display to change it's read status

// Finish UI!!!!!!!!!!!!!

// Update add book animation if want to

// Add date completed???

// add mobile support