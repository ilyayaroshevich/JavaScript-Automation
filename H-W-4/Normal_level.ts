// [Task 1] Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр
console.log('Task 1:');
{
    let a: string = `Ilya Yarashevich;`;
    for (let i: number = 1; i <= 5; i++) {
        (i % 2 == 0) ? console.log(`Привет ${a.toUpperCase()}`) : console.log(`Привет ${a.toLowerCase()}`)
    }
}
// [Task 2] Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`
console.log('Task 2:');
console.log('Task 2. Вариант 1:');
{
    let str: string = "Я учу typescript!";
    (~str.indexOf('учу')) ? console.log(str.indexOf('учу')) : console.log('Данной строки нет');
}
console.log('Task 2. Вариант 2:');
{
    let str: string = "Я тест typescript!";
    str.includes('учу') ? console.log(str.indexOf('учу')) : console.log('Данной строки нет');

}
//[Task 3] Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`
console.log('Task 3:');
{
    let str1: any = "Random String";
    // console.log(str1.at(0));
    console.log(`Длина строки ${str1} =  ${str1.length} символов`);
    function SymbolPosition(num: number) {

        return (num > str1.length || num < 0) ? console.log(`Упс, Вы ввели ${num} и вышли за границу строки`) : console.log('Всё ок')
    }
    let test = SymbolPosition(0);
}
//[Task 4] Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. 
//Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки`
console.log('Task 4:');
{
    function dotChecher(str: string) {
        return str.endsWith(`.`) ? console.log('Даненое предложение закончено') : console.log(`В конце предложения не хватает точки`)
    }
    let cheker = dotChecher('Случайная строка.');
}
//[Task 5] Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).
console.log('Task 5:');
{
    let str: string = "я учу typescript!";
    console.log(str.substring(2, 5));
    console.log(str.slice(-15, -12));
}
//[Task 6] Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
console.log('Task 6:');
{
    let str: string = "я учу typescript!";
    let str2 = str.split(" ");
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
    function anynumber(num) {
        return (Number.isInteger(num)) ? console.log(num) : console.log(Math.round(num))
    }
    let s = anynumber(5.4);
}
//[Task 10] Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
console.log('Task 10:');
{
    function floatnumber1(float1: number): number {
        return Math.floor(float1)
    }
    function floatnumber2(float2: number): number {
        return Math.ceil(float2)
    }
    function floatnumber3(float3: number): number {
        return Math.round(float3)
    }
    let s1 = floatnumber1(5.6);
    let s2 = floatnumber2(5.4);
    let s3 = floatnumber3(5.5);
    console.log(`Округляем до ближайшего меньшего ${Math.floor(s1)}`);
    console.log(`Округляем до ближайшего большего ${Math.ceil(s2)}`);
    console.log(`Округляем до ближайшего целого числа ${Math.round(s3)}`);
}
//[Task 11] Дана произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.
console.log('Task 11:');
{
}
//[Task 12] Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
console.log('Task 12:');
{
    function power(anynumb: number, n: number): number {
        return (Math.pow(anynumb, n))
    }
    let pow = power(10, 2);
    console.log(`Результат возведения в степень = ${pow}`);
}
//[Task 13] Дана произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.
console.log('Task 12:');
{
}
//[Task 14] Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции.
console.log('Task 14:');
{
    function Rand(min1, max2) {
        return Math.random() * (max2 - min1) + min1;
    }
    let int = Rand(100, 1000);
    console.log(`Случайноe целочисленное число: ${Math.round(int)}`);
}
//[Task 15] Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции
console.log('Task 15:');
{
    function Rand1(min3, max4) {
        return Math.random() * (max4 - min3) + min3;
    }
    let fl = Rand1(1.5, 125.75);
    console.log(`Случайноe число с плавающей точкой: ${fl}`);
}
//[Task 16] Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.
console.log('Task 16:');
{
    let nowDate = new Date();
    console.log(nowDate.getTimezoneOffset());

}

