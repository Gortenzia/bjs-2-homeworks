//Задание 1
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    get state() {
        return this.state = this._state;
    }
    set state(value) {
        this.value = value;
        if (value < 0) this._state = 0;
        if (value > 100) this._state = 100;
        else this._state = value;
    }

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

}



class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.author = author;
        this.type = "book";
    }

}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "novel";
    }

}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "fantastic";
    }

}

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "detective";
    }

}

//Задание 2
class Library {

    constructor(name = ' ', books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        for (let book in this.books) {
            if (book[type] === value) return this.book;
            else return null;
        }
    }

    giveBookByName(bookName) {
        this.bookName = bookName;
        if (bookName < this.books.length) this.books.slice(bookName, 1);
        else return null;
    }

}

//Задание 3
//in process