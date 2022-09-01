let myLibrary = [];

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

function addBookToLibrary() {
    const addBookButton = document.querySelector("#add-button");
    const bookTable = document.querySelector("tbody")

    addBookButton.addEventListener('click', () => {
        const bookName = document.querySelector('#bookName');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
        
        const newBook = new book(bookName.value, author.value, pages.value);
        myLibrary.push(newBook);
        [bookName.value, author.value, pages.value] = "", "", "";
    })
}


function displayLibrary() {
    for (const book in myLibrary) {
        const newEntry = document.createElement("div");
        newEntry.classList.add("book")
        let bookDetails = Object.values(book);
        for (let i = 0; i < 4; i++) {
            let detail = document.createElement("div");
            detail.innerHTML = bookDetails[i];
            console.log(detail)
            newEntry.appendChild(detail);
        }

        bookTable.appendChild(newEntry);
    }
}

addBookToLibrary()


