// Task 1
let str = 'привет как дела';
str = str.toUpperCase();
console.log(str);

// Task 2 функция возврата массива элементов начинающихся со строки
const searchStart = (arr, str) => {
    let result = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    return result;
  }

// Task 3 меньшее целое, большее целое, ближайшее целое
const number = 32.58884;
const floorNumber = Math.floor(number);
const ceilNumber = Math.ceil(number);
const roundNumber = Math.round(number);
console.log(floorNumber);
console.log(ceilNumber);
console.log(roundNumber);

// Task 4 максимальное и минимальное значение в массие
const numbers = [52, 53, 49, 77, 21, 32];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);

// Task 5 рандомное число от 0 до 10
function getRandomInt( minValue, maxValue) {
    return Math.round(Math.random() * maxValue) + minValue;
}
console.log(getRandomInt(0, 10));

// Task 6 функция принимает целое число и возвращает массив от 0 до числа длинной в 2 раза меньше
function getRandomArrNumbers(n) {
    const arr = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
      arr.push(Math.floor(Math.random() * n));
    }
    return arr;
  }
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Task 7 возвращает рандомное целое в диапазоне 2х чисел
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(5, 10));

// Task 8 вывести текущую дату  
let currentDate = new Date();
console.log(currentDate);

// Task 9 вывести дату через 73 дня
const theDate = new Date();
theDate.setDate(theDate.getDate() + 73);
console.log(theDate);

// Task 10 !принимает дату и возвращает ее в виде!
function taskDate(date) {
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}
    Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 }
 console.log(taskDate(new Date()));

