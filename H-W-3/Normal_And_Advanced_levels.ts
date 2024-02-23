/*
                                                            [Task 1]
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
    let x = 20
    let y = 58
    let z = 42
*/
console.log('Task number 1');
{
    let x: number = 20;
    let y: number = 58;
    let z: number = 42;
    console.log(`Sum is ${x + y + z}\n`);
}
/*
                                                            [Task 2]
Создайте переменные:
    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**
*/
console.log('Task number 2');
{
    let secondsInMinute: number = 60;
    let minuteInHour: number = 60;
    let hoursInDay: number = 24;
    let daysInYear: number = 365;
    let myAge: number = 27;
    let myAgeInSecond: number = myAge * daysInYear * hoursInDay * minuteInHour * secondsInMinute;
    console.log(`My age in seconds =  ${myAgeInSecond} sec.\n`);
}
/*
                                                            [Task 3]
    let count = 42
    let userName = '42'
Создайте две переменные. Поместите в них переменную **`count`** и 
превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.
*/
console.log('Task number 3');
{
    console.log('1st variant:');
    {

        let count: number = 42;
        let numToStr: string = `${count}`;
        console.log(`Type of ${numToStr} is: ${typeof numToStr}`);

        let username: string = "42";
        let strtoNum: number = +username;
        console.log(`Type of ${strtoNum} is: ${typeof strtoNum}\n`);
    }
    console.log("2nd variant:");
    {

        let count: number = 42;
        let numToStr: string = count.toString();
        console.log(`Type of ${numToStr} is: ${typeof numToStr}`);

        let username: string = "42";
        let strtoNum: number = Number.parseInt(username);
        console.log(`Type of ${strtoNum} is: ${typeof strtoNum}\n`);
    }
}
/*
                                                            [Task 4]
Имеется три переменные:
  let a = 1
  let b = 2
  let c = "белых медведей"
Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
*/
console.log("Task number 4:");
{
    console.log('1st variant:')
    {
        let a: number = 1;
        let b: number = 2;
        let c: string = "белых медведей";
        console.log(`${a}${b} ${c}\n`);
    }
    console.log('2nd variant:')
    {
        let a: number = 1;
        let a1: string = a.toString();
        let b: number = 2;
        let b1: string = b.toString();
        let c: string = "белых медведей";
        console.log(a1 + b1 + ' ' + c);
        console.log(`\n`);
    }
}
/*
                                                            [Task 5]
Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:
- доступ 
- морпех
- наледь
- попрек
- рубило                                                            
*/
console.log("Task number 5:");
{
    let a: string = "Доступ";
    let b: string = "Морпех";
    let c: string = "Наледь";
    let d: string = "Попрек";
    let e: string = "Рубило";
    let lengthWords = `
    The length of the word "Доступ": ${a.length}
    The length of the word "Морпех": ${b.length}
    The length of the word "Наледь": ${c.length}
    The length of the word "Попрек": ${d.length}
    The length of the word "Рубило": ${e.length}`;
    console.log(`${lengthWords}\n`);
}
/*
                                                            [Task 6]
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    
`Variable: %variable name% have type: %type variable%`                                                 
*/
console.log("Task number 6:");
{
    let a: number = 1;
    let b: string = 'String';
    let c: number[] = [2, 3, 4, 5, 6];
    console.log(`   Variable: ${a} have type: ${typeof a}`);
    console.log(`   Variable: ${b} have type: ${typeof b}`);
    console.log(`   Variable: ${c} have type: ${typeof c}\n`);
}
/*
                                                            [Task 7]
'true'
false
17
undefined
null
> Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.
*/
console.log('Task number 7:');
{
    let a: string = 'true';
    let b: boolean = false;
    let c: number = 17;
    let d: undefined = undefined;
    let e: null = null;
    let type = `
    Variable: ${a} have type: ${typeof a}
    Variable: ${b} have type: ${typeof b}
    Variable: ${c} have type: ${typeof c}
    Variable: ${d} have type: ${typeof d}
    Variable: ${e} have type: ${typeof e}`;
    console.log(`${type}\n`);
}
/*
                                                            [Task 8]
Даны две переменные:
    let height = 15
    let width = 20
> С помощью условий выведите в консоль разработчика наибольшее число.
*/
console.log('Task number 8:');
{
    let height: number = 15;
    let width: number = 20;
    if (height > width) {
        console.log(height);
    }
    else {
        console.log(width);
    }
    console.log(`\n`);
}
/*
                                                            [Task 9]
Написать перебор от 1 до 20, где выведутся все числа кратные трём.
> Для вычисления кратности обратите внимание на оператор %
*/
console.log('Task number 9:');
{
    let i: number;
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
    console.log(`\n`);
}
/*
                                                            [Task 10]
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
Для решения этой задачи нам помогут логические операторы **`|| &&`**.
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
> Ответ поместите в переменную **shouldGoToWork**
*/
console.log('Task number 10:');
{
    let key: boolean = true;
    let documents: boolean = true;
    let pen: boolean = true;
    let apple: boolean = false;
    let orange: boolean = true;
    let shouldGoToWork: any = key && documents && pen && apple || orange;
    if (shouldGoToWork == true) {
        console.log(`Идём на любимую работу!\n`)
    } else {
        console.log(`Мы не всё взяли. На работу не идём!\n`);
    }
}
/*
                                                            [Task 11]
Написать программу, которая принимает число: 
    1. Если число делится без остатка на 5 выводим сообщение Fiz
    2. Если число делится без остатка на 3 выводим сообшение Buz
    3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
*/
console.log('Task number 11:');
{
    let a: number = 15;
    if (a % 5 == 0 && a % 3 !== 0) console.log(`Fiz\n`);
    if (a % 5 !== 0 && a % 3 == 0) console.log(`Buz\n`);
    if (a % 5 == 0 && a % 3 == 0) console.log(`FizBuz\n`);
    if (a % 5 !== 0 && a % 3 !== 0) console.log(`Something went wrong!\n`);
}
/*
                                                            [Task 12]
Написать программу, которая выполняет следующие операции:
- Получает возраст пользователя, если он больше 18, то выводит сообщение - `Попей пивка`. 
- Если меньше, то выводит сообщение - `Пей колу`. 
- Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.
*/
console.log('Task number 12:');
{
    let myAge: number = 17;
    if (myAge > 18) console.log('Попей пивка');
    if (myAge < 18) console.log(`Пей колу`);
    if (myAge >= 16 && myAge <= 18) {
        console.log(`Можешь выкурить сигаретку, только маме не говори!\n`)
    }
}
/*
                                                            [Task 13]
Напишем программу для туристического терминала. 
Создать переменную для стороны света в которую пользовател хотел отправиться. 
После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
+ `юг` на юг пойдешь счастье найдешь
+ `север` на север пойдешь много денег найдешь
+ `запад` на запад пойдешь верного друга найдешь
+ `восток` на восток пойдешь разработчиком станешь
> Используйте конструкцию switch
*/
console.log('Task number 13:');
{
    let i: string = `восток`;
    switch (i) {
        case 'юг':
            console.log(`На юг пойдёшь - счастье найдёшь\n`);
            break;
        case `север`:
            console.log(`На север пойдёшь - много денег найдёшь\n`);
            break;
        case `запад`:
            console.log(`На запад пойдёшь - верного друга найдёшь\n`);
            break;
        case `восток`:
            console.log(`На восток пойдёшь - разработчиком станешь\n`);
            break;
        default:
            console.log(`Попробуй ещё раз :(\n`);
    }
}
/*
                                                            [Task 1] ADVANCED LEVEL
Поменяйте значение переменных местами не создавая дополнительной переменной:
    let a = 4
    let b = 3
*/
console.log('Task number 1: ADVANCED LEVEL');
{
    let a = 4;
    let b = 3;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`Variavle a: ${a}`);
    console.log(`Variable b: ${b}\n`);
}
/*
                                                            [Task 2] ADVANCED LEVEL
Написать программу, которая выполняет следующие операции: 
1. Запрашивает у пользователя число.
2. Последовательно задает вопрос: 
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
3. По окончании вывести пользователю результат в консоль, содержащий формулу и результат например: 
> ((((6 - 10) + 5) * 20) / 2 = 110)
*/
console.log('Task number 2: ADVANCED LEVEL');
{
    console.log('Введите число:');
    let x: number = 20;
    console.log(`Вы ввели число ${x}`);
    console.log('Сколько отнять?');
    let y: number = 5;
    console.log(`Отнять ${y} от предыдущего числа`);
    console.log('Сколько прибавить?');
    let u: number = 8;
    console.log(`Прибавить ${u} к предыдущему числу`);
    console.log('На сколько умножить?');
    let i: number = 2;
    console.log(`Умножить предыдущее число на ${i}`);
    console.log('На сколько разделить?');
    let d: number = 10;
    console.log(`Разделить предыдущее число на ${d}`);
    console.log(`Ваша формула:((((x - y) + u) * i) / d)`);
    console.log(`На основе введённых Вами чисел, мы получаем следующее: ${((((x - y) + u) * i) / d)}\n`)
}
/*
                                                            [Task 3] ADVANCED LEVEL
Написать программу, которая будет выводить в консоль лесенку.

```
    #
    ##
    ###
    ####
    #####
    ######
```

> Не забудьте вопспользоваться циклами
*/
console.log('Task number 3: ADVANCED LEVEL');

{
    let str = "";
    for (let i = 0; i < 6; i++) {
        str += "#";
        console.log(str);
    }
}