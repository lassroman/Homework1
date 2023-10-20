// Задача 1 венуть меньшее из двух чисел
function minNumbers(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
minNumbers();

// Задача 2 возврат четного числа
function evenNumber(n) {
    if( n % 2 == 0) {
        return(`Число четное`);
    } else {
        return(`Число нечетное`);
    }
}
evenNumber();

// Задача 3.0
function square(a) {
    console.log( a * a);
}
square();

// Задача 3.1
function square(a) {
    return( a * a);
}
square();

// Задача 4 функция возраст
function ask() {
    let age = Number(prompt(`Сколько вам лет?`));
    if (age < 0) {
        alert(`Вы ввели неправильное значение`);
    } else if (0 < age && age < 12 ) {
        alert(`Привет, друг!`);
    } else if ( age >= 13) {
        alert(`Добро пожаловать!`);
    }
}
ask();

// Задача 5
function checkNumbers( a,b ) {
    if (isNaN(a) || isNaN(b)) {
    return(`Одно или оба значения не являются числом`);
    } else {
        return(a * b);
    }
}
checkNumbers();

// Задача 6
function ask() {
    let number = Number(prompt(`Введите число`));
    if (isNaN(number)) {
       return(`Переданный параметр не является числом`);
    } else {
        let result = number**3;
       return(`${number} в кубе равняется ${result}`);
    }
}
ask();

// Задача 7
function getArea() {
    return (this.P * (this.radius**2));
}
function getPerimeter() {
    return (2 * this.P * this.radius);
}

let circle1 = {
    raduis: Number(6),
    P: Number(3.14),
    getArea: getArea,
    getPerimeter: getPerimeter,
};

let circle2 = {
    radius: 20,
    P: 3.14,
    getArea: getArea,
    getPerimeter: getPerimeter,
};

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();

