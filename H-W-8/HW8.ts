import * as _ from "lodash";
/*
#### Task 1 🖥
Выведи все элементы массива в консоль с помощью метода **`forEach`**
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
*/
console.log(`TASK 1:`);
{
    function showArrayElements(array: number[]): void {                         //function declaration
        array.forEach((elements) => console.log(elements))
    };
    showArrayElements([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
    console.log(`------------------------`);
    let showArrayElements1 = (array1: number[]): void => array1.forEach((elements1) => console.log(elements1)); //arrow function
    showArrayElements1([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
}
/*
#### Task 2 🖥
Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:
> ['member 1: Darya', 'member 2: Masha', ... etc]
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 2:`);
{
    function createNewUsersArray(userArray: string[]): void {                                   //function declaration
        const newUsersArray = userArray.map((user, index) => `member ${index + 1}: ${user}`);
        console.log(newUsersArray);
    };
    createNewUsersArray(['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']);
    console.log(`------------------------`);
    let createNewUsersArray1 = (userArray1: string[]): void => {                                //arrow function
        const newUsersArray1 = userArray1.map((user1, index1) => `member ${index1 + 1}: ${user1}`);
        console.log(newUsersArray1);
    };
    createNewUsersArray1(['Ilya', 'Alex', 'Dasha', 'Inga', 'Elena', 'Dima']);
}
/*
#### Task 3 🖥
С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
    const numbers = [7, -4, 32, -90, 54, 32, -21]
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 3:`);
{
    function createPositiveArray(numArray: number[]): void {                //function declaration
        const filteredNumbers = numArray.filter((number) => number > 0);
        console.log(filteredNumbers);
    };
    createPositiveArray([7, -4, 32, -90, 54, 32, -21]);
    console.log(`------------------------`);
    let createPositiveArray1 = (numArray1: number[]): void => {             //arrow function
        const filteredNumbers1 = numArray1.filter((number1) => number1 > 0);
        console.log(filteredNumbers1);
    };
    createPositiveArray1([7, -4, 32, -90, 54, 32, -21]);
}
/*
#### Task 4 🖥
Используя метод **`reduce`** получите сумму всех чисел массива.
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 4:`);
{
    function getSumOfArrayValue(array: number[]): void {                                    //function declaration
        let newFibonacci = array.reduce((sum, current) => sum + current, 0);
        console.log(newFibonacci);
    };
    getSumOfArrayValue([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
    console.log(`------------------------`);
    let showArrayElements1 = (array1: number[]): void => {                                  //arrow function
        let newFibonacci = array1.reduce((sum, current) => sum + current, 0);
        console.log(newFibonacci);
    };
    showArrayElements1([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
}
/*
#### Task 5 🖥
Используя метод **`find`** найдите в массиве первое четное число.
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
*/
console.log(`TASK 5:`);
{
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
    const found = numbers.find((element) => element % 2 === 0);
    console.log(found);
}
/*
#### Task 6 🖥
Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
Реализуйте оба варианта, когда результирущее значение true или false
*/
console.log(`TASK 6:`);
{
    function findMultiplesElements(myArray: number[]): boolean {                        //function declaration
        const value = myArray.some(element => element % 3 === 0 && element % 5 === 0);
        return value;
    };
    console.log(findMultiplesElements([5, 9, 13, 24, 54, 10, 13, 99, 1, 5, 15])); //TRUE
    console.log(`------------------------`);
    let findMultiplesElements1 = (myArray1: number[]): boolean => {                     //arrow function
        const value1 = myArray1.some(element1 => element1 % 3 === 0 && element1 % 5 === 0);
        return value1;
    };
    console.log(findMultiplesElements1([5, 9, 13, 24, 54, 10, 13, 99, 1, 5])); //FALSE
}
/*
#### Task 7 🖥
Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
Реализуйте оба варианта, когда результирущее значение true или false
*/
console.log(`TASK 7:`);
{
    function checkFiguresMultiples(myArray: number[]): boolean {            //function declaration
        const sumOfSquaredDigits = myArray.map(num => {
            const squared = num ** 2;
            return String(squared).split('').reduce((acc, digit) => acc + Number(digit), 0);
        });
        return sumOfSquaredDigits.every(sum => sum % 2 === 0);
    }
    console.log(checkFiguresMultiples([5, 9, 13, 99, 1, 5])); // Вернет false

    console.log(`------------------------`);

    let checkFiguresMultiples1 = (myArray: number[]): boolean => {          //arrow functiob
        const sumOfSquaredDigits = myArray.map(num => {
            const squared = num ** 2;
            return String(squared).split('').reduce((acc, digit) => acc + Number(digit), 0);
        });
        return sumOfSquaredDigits.every(sum => sum % 2 === 0);
    }
    console.log(checkFiguresMultiples1([13, 99, 13, 99, 13, 99])); // Вернет true
}
/*
#### Task 8 🖥
Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
Выведите все продукт, количество которых больше 100 гр.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 8:`);
{
    let listOfProducts = new Map<string, number>(); //Создание Map
    listOfProducts.set('Огурцы', 300);
    listOfProducts.set('Помидоры', 200);
    listOfProducts.set('Колбаса', 100);
    listOfProducts.set('Горошек', 50);
    listOfProducts.set('Соль', 25);
    listOfProducts.set('Сметана', 110);

    function getProductPriceMoreHundred(productList: Map<string, number>): void { //function declaration
        productList.forEach((value, key, map) => {
            if (value > 100) {
                console.log(key)
            };
        }
        );
    }
    getProductPriceMoreHundred(listOfProducts);
    console.log(`------------------------`);
    let getProductPriceMoreHundred1 = (productList1: Map<string, number>): void => { //arrow function
        productList1.forEach((value1, key1, map) => {
            if (value1 > 100) {
                console.log(key1)
            };
        }
        );
    }
    getProductPriceMoreHundred1(listOfProducts);
}
/*
#### Task 9 🖥
Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
    const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 9:`);
{
    function getArrWithUniqValue(randArr: number[]): void {                                     //function declaration
        const myFirstSet = [...new Set(randArr)];
        console.log(JSON.stringify(myFirstSet, null, 4));
    }
    getArrWithUniqValue([1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]);

    console.log(`------------------------`);

    let getArrWithUniqValue1 = (randArr1: number[]): void => {                                  //arrow function
        const myFirstSet1 = [...new Set(randArr1)];
        console.log(JSON.stringify(myFirstSet1, null, 4));
    }
    getArrWithUniqValue1([1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]);
}
/*
#### Task 10 🖥
Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. 
Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'. 
Первый элемент никуда записывать не надо.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
console.log(`TASK 10:`);
{
    function getSecondAndThirdValue(myArray: string[]): void {                                  //function declaration
        let [, elem = "bbb", elem3 = "eee"] = myArray;
        console.log(`Второй элемент массива: ${elem} и третий элемент массива: ${elem3}`);
    }
    getSecondAndThirdValue(['Belarus', 'Russia', 'Poland', 'Litva', 'Latvia']);

    let getSecondAndThirdValue1 = (myArray1: string[]): void => {                               //arrow function
        let [, elem1 = "bbb", elem31 = "eee"] = myArray1;
        console.log(`Второй элемент массива: ${elem1} и третий элемент массива: ${elem31}`);
    }
    getSecondAndThirdValue1(['Belarus']);
}
/*
#### Task 11 🖥
Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. 
Запишите соответствующие значения в переменные name, surname и age. 
Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
*/
console.log(`TASK 11:`);
{
    interface IPerson {
        name?: string;
        surname?: string;
        age?: string;
    }
    function getdestructArray(myArray: IPerson): void {                                        //function declaration
        let { name = 'Аноним', surname = 'Анонимович', age = '? лет' }: IPerson = myArray;
        console.log(name);
        console.log(surname);
        console.log(age);
    }
    getdestructArray({ name: 'Петр', 'surname': 'Петров', 'age': '20 лет' });
    console.log(`------------------------`);
    function getdestructArray1(myArray1: IPerson): void {                                      //arrow function
        let { name = 'Аноним', surname = 'Анонимович', age = '? лет' }: IPerson = myArray1;
        console.log(name);
        console.log(surname);
        console.log(age);
    }
    getdestructArray1({ 'surname': 'Петров' });
}
/*
#### Task 1. ADVANCED level 🖥
+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
//не русская 'у', а латинская буква
> Примечание: для этой задачи **`y`** не считается гласной. 
*/
console.log(`TASK 1.ADVANCED level:`);
{
    let clineStr = (str: string) => str.replace(/[aeiou]/gi, '');
    console.log(clineStr(`This website is for losers LOL!`));
}
/*
#### Task 2. ADVANCED level 🖥
+ В приведенных ниже примерах показано, как написать функцию:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
> Параметр - это строка, которая включает только буквы от a..z и A..Z.
*/
console.log(`TASK 2.ADVANCED level:`);
{
    let getRepeatedLetters = (myStr: string): string => {
        let letters: string[] = myStr.split('');
        let repLetters: string[] = [];
        for (let i: number = 0; i < letters.length; i++) {
            let firstUpper = letters[i].toUpperCase();
            let lowCase = letters[i].toLowerCase().repeat(i);
            let concat = firstUpper + lowCase;
            repLetters.push(concat);
        };
        return repLetters.join('-');
    };
    console.log(getRepeatedLetters('AbcD'));
}
/*
#### Task 3. ADVANCED level 🖥
Самый высокий и самый низкий
+ В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.
*/
console.log(`TASK 3.ADVANCED level:`);
{
    let highAndLow: string = "1 2 -3 4 5";
    let arrayWithNum: number[] = highAndLow.split(' ').map(Number);
    let maxVal = _.max(arrayWithNum);
    let minVal = _.min(arrayWithNum);
    console.log(`${maxVal} ${minVal}`);
}
/*
#### Task 4. ADVANCED level 🖥
+ Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
*/
console.log(`TASK 3.ADVANCED level:`);
{
    let isItIsigramOrNot = (word: string): boolean => {
        let arrayFromWord = word.toLowerCase().split(``);
        for (let i: number = 0; i < arrayFromWord.length; i++) {
            for (let j = i + 1; j < arrayFromWord.length; j++) {
                if (arrayFromWord[i] === arrayFromWord[j]) {
                    return false;
                }
            }
        }
        return true;
    };
    console.log(isItIsigramOrNot('Dermatoglyphics'));
}

