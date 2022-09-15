let myLibrary = [];
let libraryContainer = document.querySelector(".library-container")


/// FUNCTIONS ///
function book(name, author, numOfPages, read, index) {
    this.name = name;
    this.author = author;
    this.pages = numOfPages;
    this.read = read;
    this.info = function() {
        if (read === true) {
            readYetMessage = "read"
        } else {
            readYetMessage = "not read yet"
        }
        return `${name} by ${author}, ${numOfPages} pages, ${readYetMessage}`
    }
    this.index = index;
}

function showAddBookForm() {
    const showFormButton = document.querySelector('.show-form');
    const addBookForm = document.querySelector('#add-book');

    showFormButton.addEventListener('click', () => {
        addBookForm.style.display = "block";
        showFormButton.style.display = "none"
    } )
}

function addBooksToLibraryContainer() {
    while (libraryContainer.firstChild){
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
    let counter = 0;
    myLibrary.forEach((book) => {
        const latestEntry = book;
        console.log(latestEntry);
        const bookIndex = counter

        const newEntry = document.createElement("div");
        newEntry.dataset.index = bookIndex;
        newEntry.classList.add("book");
        let bookDetails = Object.values(latestEntry);
        for (let i = 0; i < 4; i++) {
            let detail = document.createElement("div");
            detail.innerHTML = bookDetails[i];
            // console.log(detail)
            newEntry.appendChild(detail);
        }
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove");
        removeBookButton.type = "button";
        removeBookButton.innerHTML = "Delete";
        removeBookButton.addEventListener('click', (event) => {
            let selectedBookIndex = bookIndex;
            console.log(selectedBookIndex)
            removeBook(selectedBookIndex);
        })
        newEntry.appendChild(removeBookButton);
        

        libraryContainer.appendChild(newEntry);
        counter++;
    })
    // let deleteButtons = document.querySelectorAll('.remove');
    // deleteButtons.forEach((item) => {
    //     item.addEventListener('click', (event) => {
    //         let selectedBookIndex = event.target.parentElement.dataset.index;
    //         console.log(selectedBookIndex)
    //         removeBook(selectedBookIndex);
    //     })
    
    
}

function addBookToLibrary() {
    const addBookButton = document.querySelector("#add-button");
    const newBookForm =  document.querySelector("#add-book");

    addBookButton.addEventListener('click', (event) => {
        const bookName = document.querySelector('#bookName');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
        const read = document.querySelector('#read');      
    
        const newBook = new book(bookName.value, author.value, pages.value, read.value, 0);
        
        myLibrary.push(newBook);

        const currentBookIndex = myLibrary.length - 1;
        myLibrary[currentBookIndex].index = currentBookIndex;
        console.log(myLibrary);

        addBooksToLibraryContainer();
        newBookForm.reset()
    }) 
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    addBooksToLibraryContainer();
    
}

function displayLibrary() {
    // myLibrary.forEach((item) => {
    //     addBookToLibraryContainer(item);
    // })
    // let deleteButtons = document.querySelectorAll('.remove');
    // deleteButtons.forEach((item) => {
    //     item.addEventListener('click', (event) => {
    //         let selectedBookIndex = event.target.parentElement.dataset.index;
    //         console.log(selectedBookIndex)
    //         removeBook(selectedBookIndex);
    //     })
    // })
}

/// END FUNCTIONS ///

showAddBookForm();

// displayLibrary();

addBookToLibrary();






