// Задача 1
const password = 'qwerty';
const ask = prompt('Введите пароль');
if (ask === password) {
    console.log(`Пароль введен верно`);
} else{
    console.log(`Пароль введен неправильно`);
}


//Задача 2
let c = 7;

if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


//Задача 3 
let d = 25; let e = 345;
if ( d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');    
}


//Задача 4
let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));


//Задача 5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Осень');
    break;
  default:
    console.log('Вы ошиблись, такого месяца нет');
    break;
}

