// [Task 1] Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр
console.log('Task 1:');
{
    let fullName: string = `Ilya Yarashevich;`;
    for (let i: number = 1; i <= 5; i++) {
        console.log((i % 2 == 0) ? `Привет ${fullName.toUpperCase()}` : `Привет ${fullName.toLowerCase()}`);
    }
}
// [Task 2] Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`
console.log('Task 2:');
console.log('Task 2. Вариант 1:');
{
    let str: string = "Я учу typescript!";
    console.log((~str.indexOf('учу')) ? `Позиция подстроки: ${str.indexOf('учу')}` : 'Данной строки нет');
}
console.log('Task 2. Вариант 2:');
{
    let str: string = "Я тест typescript!";
    console.log(str.includes('учу') ? `Позиция подстроки: ${str.indexOf('учу')}` : 'Данной строки нет');
}
//[Task 3] Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`
console.log('Task 3:');
{
    let str: string = "Random String";
    console.log(`Длина строки ${str} = ${str.length} символов`);
    function getPositionOfSymbol(posOfSymb: number): string {
        return posOfSymb > str.length || posOfSymb < 0 ? `Упс, Вы ввели ${posOfSymb} и вышли за границу строки` : 'Всё ок';
    }
    let position = console.log(getPositionOfSymbol(150));
}
//[Task 4] Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. 
//Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки`
console.log('Task 4:');
{
    function checkDotInString(str: string): string {
        return str.endsWith(`.`) ? 'Данное предложение закончено' : `В конце предложения не хватает точки`;
    }
    let stringForCheck = console.log(checkDotInString('Случайная строка.'));
}
//[Task 5] Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).
console.log('Task 5:');
{
    let str: string = "я учу typescript!";
    console.log(str.substring(2, 5));
    console.log(str.slice(-15, -12));
    console.log(str.slice(2, 5));
}
//[Task 6] Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
console.log('Task 6:');
{
    let str1: string = "я учу typescript!";
    let str2: string[] = str1.split(" ");
    console.log(str2);
}
//[Task 7] Дана строка '                я учу typescript!                '. Выведите строку, без начальных и пробелов в конце строки.
console.log('Task 7:');
{
    let str: string = "                я учу typescript!                ";
    console.log(str.trim());
}
//[Task 8] Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки
console.log('Task 8:');
{
    let num: number = 8.829734872948;
    console.log(num.toFixed(3));
}
//[Task 9] Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.
console.log('Task 9:');
{
    function checkNumberIsInteger(num: number): number {
        return Number.isInteger(num) ? num : Math.round(num);
    }
    let anyNumber = console.log(checkNumberIsInteger(5.4));
}
//[Task 10] Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
console.log('Task 10:');
{
    function getRoundNumberToSmallerOne(floatNum1: number): number {
        return Math.floor(floatNum1);
    }
    function getRoundNumberToLargerOne(floatNum2: number): number {
        return Math.ceil(floatNum2);
    }
    function getRoundNumberToIntegerOne(floatNum3: number): number {
        return Math.round(floatNum3);
    }
    let anyFloatNumber1 = getRoundNumberToSmallerOne(5.6);
    let anyFloatNumber2 = getRoundNumberToLargerOne(5.4);
    let anyFloatNumber3 = getRoundNumberToIntegerOne(5.5);
    console.log(`Округляем до ближайшего меньшего ${anyFloatNumber1}`);
    console.log(`Округляем до ближайшего большего ${anyFloatNumber2}`);
    console.log(`Округляем до ближайшего целого числа ${anyFloatNumber3}`);
}
//[Task 11] Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
console.log('Task 11 is the same as Task 10:');
{
}
//[Task 12] Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
console.log('Task 12:');
{
    function getNumberRaisedToPower(anyNum: number, power: number): number {
        return Math.pow(anyNum, power);
    }
    let anyNumbers = console.log(`Результат возведения в степень = ${getNumberRaisedToPower(10, 2)}`);
}
//[Task 13] Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
console.log('Task 13 is the same as Task 12:');
{
}
//[Task 14] Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции.
//[Task 15] Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции
console.log('Task 14 and Task 15:');

function getRandomNumber(minNum: number, maxNum: number): number {
    return Math.random() * (maxNum - minNum) + minNum;
}
{
    let rangeOfNumbersForRoundToInt = console.log(`Случайное целочисленное число: ${Math.round(getRandomNumber(100, 1000))}`);
    let rangeOfNumbersForGetFloat = console.log(`Случайноe число с плавающей точкой: ${getRandomNumber(100, 1000)}`);
}
//[Task 16] Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.
console.log('Task 16:');
{
    let date: Date = new Date();
    let month: any = date.getMonth() + 1,
        year: any = date.getFullYear(),
        day: any = date.getDate(),
        hours: any = date.getUTCHours(),
        minutes: any = date.getUTCMinutes(),
        seconds: any = date.getUTCSeconds();
    let formatedDate = month + "/" + year + "/" + day;
    let formatedTime = hours + ":" + minutes + ":" + seconds;
    console.log(`Текущая дата: ${formatedDate}. Текущее время ${formatedTime}`);
}

