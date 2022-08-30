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
        const newEntry = document.createElement("tr");

        let bookDetails = Object.values(newBook);
        for (let i = 0; i < 3; i++ ) {
            let columnItem = document.createElement("td");
            columnItem.innerHTML = bookDetails[i];
            console.log(columnItem)
            newEntry.appendChild(columnItem);
        }

        bookTable.appendChild(newEntry);
        [bookName.value, author.value, pages.value] = "", "", "";
    })
}

addBookToLibrary()