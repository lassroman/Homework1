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