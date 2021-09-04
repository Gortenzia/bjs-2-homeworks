//Задание 1

function parseCount(value) {

    const parsed = Number.parseInt(value, 10);

    if (Number.isNaN(parsed)) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }
    return parsed;
}

function validateCount(value) {

    try {
        parseCount(value);
    } catch (err) {
        return err;
    }

}


//Задание 2

const triangleError = new Error("Треугольник с такими сторонами не существует");

class Triangle {

    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.csideC = sideC;

        if (((sideA + sideB) < sideC) || ((sideB + sideC) < sideA) || ((sideA + sideC) < sideB)) throw triangleError;
    }

    getPerimeter() {
        this.perimetr = this.sideA + this.sideB + this.sideC;
        return this.perimetr;
    }

    getArea() {
        const halfPerimetr = isNumber(0.5 * this.perimetr);
        let x = this.perimetr * ((this.perimetr - this.sideA) * (this.perimetr - this.sideB) * (this.perimetr - this.sideC));
        this.triangleSquare = Math.sqrt(x);
        return this.triangleSquare;
    }

}



function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle();
    } catch (err) {
        return new Triangle(getArea(err), getPerimeter(err));
    }
}