// Task 1 отсортировать объекты со возрастанию

const peopleAge = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(peopleAge.sort((a, b) => a.age - b.age));


// Task 2 функция фильтр

function isPositive(n) {
    return n > 0; 
}
    
function isMale(man) {
    return man.gender === "male";
}
    
function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
        result.push(arr[i]);
        }
    }
    return result;
}
    
console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: "male"},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
console.log(filter(people, isMale)); 

// Task 3 вывести в консоль дату каждые 3 секудны на протяжении 30 секунд
function printDate() {
    console.log(new Date());
}

let count = 0;
let intervalId = setInterval(() => {
    printDate();
    count += 3;
    if (count >= 30) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000);

//  Task 4 вывод ффункции через 1 сек
function delayForSecond(callback) {
    setTimeout(callback, 1000);  
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//  Task 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
			if(cb)
            { cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function () {
    sayHi('Глеб');
});