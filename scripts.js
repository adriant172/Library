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
    prompt("")
}