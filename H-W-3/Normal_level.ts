/*
                                                            [Task 1]
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
    let x = 20
    let y = 58
    let z = 42
*/
console.log('Задача номер 1');
{
    let x: number = 20;
    let y: number = 58;
    let z: number = 42;
    console.log(`Sum is ${x + y + z}`);
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
console.log('Задача номер 2');
{
    let secondsInMinute: number = 60;
    let minuteInHour: number = 60;
    let hoursInDay: number = 24;
    let daysInYear: number = 365;
    let myAge: number = 27;
    let myAgeInSecond: number = myAge * daysInYear * hoursInDay * minuteInHour * secondsInMinute;

    console.log(`My age in seconds =  ${myAgeInSecond} sec.`);
}
/*
                                                            [Task 3]
    let count = 42
    let userName = '42'
Создайте две переменные. Поместите в них переменную **`count`** и 
превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.
*/
console.log('Задача номер 3');
{
    console.log('Первый вариант решения:');
    {
        //вариант номер 1.
        let count: number = 42;
        let numToStr: string = `${count}`;
        console.log(`Type of ${numToStr} is: ${typeof numToStr}`);

        let username: string = "42";
        let strtoNum: number = +username;
        console.log(`Type of ${strtoNum} is: ${typeof strtoNum}`);
    }
    console.log("Второй вариант решения:");
    {

        let count: number = 42;
        let numToStr: string = count.toString();
        console.log(`Type of ${numToStr} is: ${typeof numToStr}`);

        let username: string = "42";
        let strtoNum: number = Number.parseInt(username);
        console.log(`Type of ${strtoNum} is: ${typeof strtoNum}`);
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