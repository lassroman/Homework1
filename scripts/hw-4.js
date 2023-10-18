// Задача 1
for (let i = 0; i < 2; i++) {
    console.log("Привет!");
}

// Задача 2
for ( let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задача 3
for ( let i = 7; i <= 22; i++){
    console.log(i);
}

// Задача 4
let obj = {
    Коля : "200",  
    Вася : "300",
    Петя : "400"
};

for( let key in obj) {
    console.log(`${'Коля'} - зарплата ${obj['Коля']} долларов`);
}

// Задача 5
// Решил только после просмотра разбора
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++
}
console.log(n);
console.log(num);

// Задача 6

let friday = Number(prompt(`Введите дату`));
for (let i = friday; i <= 31; i += 7) {
    console.log(`Сегодня птница ${i}-число. Подготовьте отчет.`)
}