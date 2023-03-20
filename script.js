// initialize variables
const bookContainer = document.querySelector('.book-container');
const formPopup = document.querySelector('.form-popup');
const form = document.querySelector('.form-container');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('is-read');
const submitButton = document.getElementById('submit-btn');
const booksRead = document.querySelector('.books-read');
const booksUnread = document.querySelector('.books-unread');
const totalBooks = document.querySelector('.total-books');
const myLibrary = [];
let title = '';
let author = '';
let pages = '';
let isRead = '';
let booksReadCount = '';
let booksUnreadCount = '';
let totalBooksCount = '';


// function to create a new book object
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}


// initialize temporary book variables and add to myLibrary[]
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
const gameOfThrones = new Book('A Game of Thrones', 'George R.R. Martin', '694', false);
const eyeOfTheWorld = new Book('The Eye of the World', 'Robert Jordan', '832', true);
const wildBuilt = new Book('A Psalm for the Wild-Built', 'Becky Chambers', '160', true);
const moreOfLess = new Book('The More of Less', 'Joshua Becker', '203', false);
const dinosaurs = new Book('The Rise and Fall of the Dinosaurs', 'Steve Brusatte', '360', false);
const sixthExtinction = new Book('The Sixth Extinction', 'Elizabeth Kolbert', '290', true);

myLibrary.push(theHobbit, gameOfThrones, eyeOfTheWorld, wildBuilt, moreOfLess, dinosaurs, sixthExtinction);


// function to update book counts
function updateBookCounts() {
  booksReadCount = '';
  booksUnreadCount = '';

  myLibrary.forEach((book) => {
    if (book.isRead === true) {
      booksReadCount++;
    } else if (book.isRead === false) {
      booksUnreadCount++;
    }
  });

  if (booksReadCount < 1) {
    booksReadCount = 0;
  }

  if (booksUnreadCount < 1) {
    booksUnreadCount = 0;
  }

  totalBooksCount = myLibrary.length;

  booksRead.textContent = `Books Read: ${booksReadCount}`;
  booksUnread.textContent = `Books Unread: ${booksUnreadCount}`;
  totalBooks.textContent = `Total Books: ${totalBooksCount}`;
}


// function to display initial read information of a book
Book.prototype.initialReadInfo = function (button) {
  if (this.isRead === true) {
    button.classList.add('has-read');
    button.textContent = 'Read';
  } else if (this.isRead === false) {
    button.classList.add('not-read');
    button.textContent = 'Not Read';
  }
};


// function to toggle between "read" and "not read" on a book that's already displayed
Book.prototype.populateReadInfo = function (button) {
  if (this.isRead === true) {
    button.classList.remove('has-read');
    button.classList.add('not-read');
    button.textContent = 'Not Read';
    this.isRead = false;
  } else if (this.isRead === false) {
    button.classList.remove('not-read');
    button.classList.add('has-read');
    button.textContent = 'Read';
    this.isRead = true;
  }
  updateBookCounts();
};


// create add book button
const addBookButton = document.createElement('button');
addBookButton.classList.add('add-book-btn');
const buttonText = document.createElement('div');
buttonText.textContent = 'Add Book';
const plusImage = document.createElement('img');
plusImage.src = 'images/plus.svg';
addBookButton.appendChild(plusImage);
addBookButton.appendChild(buttonText);


// function to loop through array of books and display each book
function displayBooks() {
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookContainer.prepend(bookCard);
    bookContainer.prepend(addBookButton);

    const bookInfo = document.createElement('div');
    const buttonContainer = document.createElement('div');
    bookInfo.classList.add('book-info');
    buttonContainer.classList.add('button-container');
    bookCard.appendChild(bookInfo);
    bookCard.appendChild(buttonContainer);

    const titleDisplay = document.createElement('div');
    const authorDisplay = document.createElement('div');
    const pageDisplay = document.createElement('div');
    const isReadDisplay = document.createElement('div');
    const removeDisplay = document.createElement('div');
    bookInfo.appendChild(titleDisplay);
    bookInfo.appendChild(authorDisplay);
    bookInfo.appendChild(pageDisplay);
    buttonContainer.appendChild(isReadDisplay);
    buttonContainer.appendChild(removeDisplay);

    titleDisplay.classList.add('display');
    authorDisplay.classList.add('display');
    pageDisplay.classList.add('display');

    const isReadButton = document.createElement('button');
    const removeButton = document.createElement('button');
    isReadButton.classList.add('is-read-btn');
    removeButton.classList.add('remove-btn');
    isReadDisplay.appendChild(isReadButton);
    removeDisplay.appendChild(removeButton);

    titleDisplay.textContent = book.title;
    authorDisplay.textContent = book.author;
    pageDisplay.textContent = `${book.pages} pages`;
    book.initialReadInfo(isReadButton);
    removeButton.textContent = 'Remove';

    isReadButton.addEventListener('click', () => {
      book.populateReadInfo(isReadButton);
    });

    removeButton.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      updateBookDisplay();
      bookContainer.prepend(addBookButton);
    });
  });
}


// function to update book display
function updateBookDisplay() {
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }
  displayBooks();
  updateBookCounts();
}


// function to add a new book to the library
function addBookToLibrary() {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  isRead = isReadInput.checked;

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  updateBookDisplay();
}


// function to display pop up form
function openForm() {
  formPopup.style.display = 'block';
  titleInput.focus();
}


// function to close pop up form
function closeForm() {
  formPopup.style.display = 'none';
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  isReadInput.checked = false;
}


// set on click attribute to open the pop up form on the add book button
addBookButton.setAttribute('onclick', 'openForm()');


// event listener to add book to the library when submit is clicked on the pop up form
submitButton.addEventListener('click', (e) => {
  if (!form.checkValidity()) {
    form.reportValidity();
  } else {
    addBookToLibrary();
    closeForm();
    e.preventDefault();

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    isReadInput.checked = false;
  }
});


updateBookDisplay();