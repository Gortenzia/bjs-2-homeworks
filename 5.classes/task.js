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
        for (let book of this.books) {
            if (book[type] === value) return book;
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name === bookName) return this.books.splice(bookName, 1)[0];
        }
        return null;
    }

}

//Задание 3

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
marks = {};

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark, discipline) {
    if (mark > 5 || mark < 1) {
        throw Error('Введите оценку в диапазоне от 1 до 5')
    } else {
        if (this.marks[discipline] !== undefined) {
            this.marks[discipline].push(mark);
        } else {
            this.marks[discipline] = [];
            this.marks[discipline].push(mark);
        }
    }
}


Student.prototype.addMarks = function (discipline, ...marks) {
    if (this.marks[discipline] === undefined) {
        this.marks[discipline] = [];
    }

    this.marks[discipline].push(...marks);
}

Student.prototype.getAverageBySubject = function (discipline) {
    if (this.marks[discipline] !== undefined) {
        let sum = 0;
        for (let mark of this.marks[discipline]) {
            sum += mark;
        }
        return sum / this.marks[discipline].length;
    }
}



Student.prototype.getAverage = function () {
    let sum = 0;
    for (let mark of this.marks) {
        sum += mark;
    }
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subjectName;
    delete this.marks;
}



let student1 = new Student('Kolin', 'male', '28');
let student2 = new Student('Andra', 'male', '18');
let student3 = new Student('Anna', 'female', '17');
let student4 = new Student('Tally', 'female', '24');
let student5 = new Student('Spencer', 'male', '23');


const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
try {
    student.addMark(6, "geometry");
} catch (err) {
    console.log('Ошибка! ' + err)
} // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");


