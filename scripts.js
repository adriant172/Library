let myLibrary = [];
let libraryContainer = document.querySelector(".library-container")


/// FUNCTIONS ///
function book(name, author, numOfPages, read, index) {
    this.name = name;
    this.author = author;
    this.pages = numOfPages;
    this.read = read;
    this.info = function() {
        if (this.read === true) {
            readStatus = "Have Read";
        } else {
            readStatus = "Have Not Read";
        }
        return readStatus
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
        for (let i = 0; i < 3; i++) {
            let detail = document.createElement("div");
            detail.innerHTML = bookDetails[i];
            // console.log(detail)
            newEntry.appendChild(detail);
        }
        const readStatus = document.createElement("div");
        readStatus.innerHTML = latestEntry.info();
        newEntry.appendChild(readStatus);
        
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove");
        removeBookButton.type = "button";
        removeBookButton.innerHTML = "Delete";
        removeBookButton.addEventListener('click', () => {
            let selectedBookIndex = bookIndex;
            console.log(selectedBookIndex);
            removeBook(selectedBookIndex);
        })
        newEntry.appendChild(removeBookButton);

        const toggleRead = document.createElement("button");
        toggleRead.classList.add("read-status");
        toggleRead.type = "button";
        toggleRead.innerHTML = "Toggle Read Status";
        toggleRead.addEventListener('click', () => {
            toggleReadStatus(bookIndex);
        })
        newEntry.appendChild(toggleRead)

        libraryContainer.appendChild(newEntry);
        counter++;
    })
    
}

function addBookToLibrary() {
    const addBookButton = document.querySelector("#add-button");
    const newBookForm =  document.querySelector("#add-book");
    const invalidMessages = document.querySelectorAll(".invalid-message");

    addBookButton.addEventListener('click', (event) => {
        for (message of invalidMessages) {
        message.innerHTML = "";
        }

        const bookName = document.querySelector('#bookName');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
        let read = document.querySelector('#read').checked
        
        for (item of [bookName, author, pages]) {
            const elementId = item.id;
            if (!item.value) {
                document.querySelector(`#${elementId} + div`).innerHTML = "Invalid. No Input";
                return
            }
        }

        const newBook = new book(bookName.value, author.value, pages.value, read, 0);
        
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

function toggleReadStatus(index) {
    if (myLibrary[index].read === true) {
        myLibrary[index].read = false;
    } else {
        myLibrary[index].read = true;
    }
    addBooksToLibraryContainer();
}



/// END FUNCTIONS ///

showAddBookForm();


addBookToLibrary();






