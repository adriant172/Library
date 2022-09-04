let myLibrary = [];
let libraryContainer = document.querySelector(".library-container")


/// FUNCTIONS ///
function book(name, author, numOfPages, read) {
    this.name = name;
    this.author = author;
    this.pages = numOfPages;
    this.read = read
    this.info = function() {
        if (read === true) {
            readYetMessage = "read"
        } else {
            readYetMessage = "not read yet"
        }
        return `${name} by ${author}, ${numOfPages} pages, ${readYetMessage}`
    }
}

function showAddBookForm() {
    const showFormButton = document.querySelector('.show-form');
    const addBookForm = document.querySelector('#add-book');

    showFormButton.addEventListener('click', () => {
        addBookForm.style.display = "block";
        showFormButton.style.display = "none"
    } )
}

function addBookToLibraryContainer() {
    const latestEntry = myLibrary.slice(-1)[0]
    console.log(latestEntry)
    const newEntry = document.createElement("div");
    newEntry.classList.add("book")
    let bookDetails = Object.values(latestEntry);
    for (let i = 0; i < 4; i++) {
        let detail = document.createElement("div");
        detail.innerHTML = bookDetails[i];
        console.log(detail)
        newEntry.appendChild(detail);
    }
    libraryContainer.appendChild(newEntry);
}

function addBookToLibrary() {
    const addBookButton = document.querySelector("#add-button");
    const newBookForm =  document.querySelector("#add-book");

    addBookButton.addEventListener('click', (event) => {
        const bookName = document.querySelector('#bookName');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
        const read = document.querySelector('#read');
        
        const newBook = new book(bookName.value, author.value, pages.value, read.value);
        
        myLibrary.push(newBook);
        console.log(myLibrary);

        addBookToLibraryContainer();
        newBookForm.reset()

    }) 
}

function displayLibrary() {
    myLibrary.forEach((book) => {
        addBookToLibraryContainer();
    })
}

/// END FUNCTIONS ///

showAddBookForm()

displayLibrary()

addBookToLibrary()




