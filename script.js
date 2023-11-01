function monthNumber() {
    let startMonth = Number(prompt(`Введите номер месяца`));
    if (startMonth === 12 || startMonth === 1 || startMonth === 2) {
        return alert (`Зима`);
    }
    else if (startMonth === 3 || startMonth === 4 || startMonth === 5) {
        return alert (`Весна`);
    }
    else if (startMonth === 6 || startMonth === 7 || startMonth === 8) {
        return alert (`Лето`);
    }
    else if (startMonth === 9 || startMonth === 10 || startMonth === 11) {
        return alert (`Осень`);
    }
    else {
        return alert (`Такого месяца не существует, Вы ошиблись((`);
    }
}

function fruits() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let firstAnswer = prompt(`Какой фрукт был первым в списке?`);
    let secondAnswer = prompt(`А какой был последним?`);
    if (firstAnswer.toLowerCase() === words[0].toLowerCase() && secondAnswer.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert(`Поздравляю, у Вас хорошая память! Вы запомнли все слова`);
        return gameStop();
    } else if (firstAnswer.toLowerCase() === words[0].toLowerCase() || secondAnswer.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert(`Вы были близки к победе!`);
        return gameStop();
    } else {
        alert(`К сожалению, Вы не угадали`);
        return gameStop();
    }
}

function gameStop() {
    let a = confirm(`Хотите продолжить игру?`)
    if (a === true) {
        return fruits();
    } else {
        alert(`Спасибо за игру, до новых встреч!`);
    }
}

