function Book(title, publicationDate, checkOutDate, call, authors, available) {
    this.available = available;
    this.title;
    this.publicationDate;
    this.checkOutDate;
    this.call;
    this.authors;

}
Book.prototype.checkOut = function () {
    this.available = true;
    this.checkOutDate = new Date;
}
Book.prototype.checkIn = function () {
    this.available = false;
}
Book.prototype.isOverdue = function () {
    if (this.checkOutDate - CurrentDate >= 14) {
        return true;
    }
    return false;
}



function Author(firstName, lastName) {
    this.firstName;
    this.lastName;
}

function Patron(firstName, lastName, libraryCard, books, fine = 0.00) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.libraryCard = libraryCard;
    this.books = books;
    this.fine = fine;

}
Patron.prototype.read = function () {
    let book = new Book();
    this.books.push(book);

}
Patron.prototype.return = function () {
    this.books.pop();
}
