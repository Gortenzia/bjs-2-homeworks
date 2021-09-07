//Задание 1

function parseCount(value) {

    const parsed = Number.parseInt(value, 10);

    if (Number.isNaN(parsed)) {
        throw parseError = new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(value) {

    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }

}


//Задание 2

class Triangle {


    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (((sideA + sideB) < sideC) || ((sideB + sideC) < sideA) || ((sideA + sideC) < sideB))
            throw new Error("Треугольник с такими сторонами не существует");;
    }


    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }


    getArea() {
        const halfPerimetr = (0.5 * this.getPerimeter());
        let x = halfPerimetr * (halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC);
        return Number(Math.sqrt(x).toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (err) {
        return new class TriangleError {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}




