// Задача 1 после вывода 10 в консоль цикл останавливается
const arrNumber = [1, 5, 4, 10, 0, 3];
for ( let i = 0; i < arrNumber.length; i++) {
    console.log(arrNumber[i]);
    if (arrNumber[i] === 10) break;
}

// Задача 2 индекс числа 4 в массиве
const arrNumber2 = [1, 5, 4, 10, 0, 3];
console.log(arrNumber2.indexOf(4));

// const arrNumber2 = [1, 5, 4, 10, 0, 3];
// const n = 4;
// let result = -1;
// for ( let i = 0; i < arrNumber2.length; i++) {
//     if (arrNumber2[i] === n) {
//         result = i; 
//         break;
//     }
// }
// console.log(result);

// Задача 3
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');
console.log(result);

// Задача 4 многомерный массив
const mass = [];
for( i = 0; i < 3; i++) {
    mass[i] = [];
    for( j = 0; j < 3; j++) {
        mass[i] [j] = 1;
    }
}
console.log(mass);

// Задача 5 добавить в массив
let numbers = [1, 1, 1];
numbers.push(2, 2, 2);
console.log(numbers);

// Задача 6 убрать а и отсортировать
const arrFil = [9, 8, 7, 'a', 6, 5];
let resultFil = arrFil.filter( item => !isNaN(item));
resultFil = resultFil.sort();
console.log(resultFil);

// Задача 7
let arrLuck = [9, 8, 7, 6, 5];
let guess = prompt('Угадайте число из массива [9, 8, 7, 6, 5]');
if (arrLuck.includes(Number(guess))) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задача 8
let str = 'abcdef';
let arrStr = str.split('').reverse().join('');
console.log(`'${arrStr}'`);

// Задача 9
let arr3 = [[1, 2, 3,],[4, 5, 6]];
console.log(arr.flat());

// Задача 10
function plus() {
    let arr4 = [4, 7, 2, 8, 0, 3];
    for (let i = 0; i < arr4.length - 1; i++) {
        console.log(arr4[i] + arr4[i + 1]);
    }
}

// Задача 11
function squareArray(arr) {
    return arr.map(x => x ** 2);
}

// Задача 12
function getLengthWords(arr) {
    let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    return arr.map(x => x.length);
}

// Задача 13
function filterPositive(array) {
    return array.filter(x => x < 0);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


