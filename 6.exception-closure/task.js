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
    }

    isTriangle(sideA, sideB, sideC) {

        if (((this.sideA + this.sideB) < sideC) || ((this.sideB + this.sideC) < sideA) || ((this.sideA + this.sideC) < sideB)) {
            throw triangleError;

        }
    }

    getPerimeter() {
        const perimetr = this.sideA + this.sideB + this.sideC;
        return perimetr;
    }

    getArea() {
        const halfPerimetr = 0.5 * this.perimetr;
        let x = this.perimetr * (this.perimetr - sideA) * (this.perimetr - sideB) * (this.perimetr - sideC);
        const triangleSquare = Math.sqrt(x);
        return triangleSquare;
    }

}


function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle();
    } catch (err) {
        return new class triangleError {
            getArea() {
                return err;
            }
            getPerimeter() {
                return err;
            }
        }
    }
}
