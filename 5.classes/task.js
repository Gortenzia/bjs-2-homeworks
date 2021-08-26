//Задание 1
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = type;
        this.state = state;
    }

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set setState(newState) {
        this.newState = newState;
        if (newState < 0) this.state = 0;
        if (newState > 100) this.state = 100;
        else this.state = this.newState;
    }

    get setState() {
        this.state = this.newState;
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


//Задание 3