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