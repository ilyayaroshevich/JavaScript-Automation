import * as _ from "lodash";
/* [TASK 1] Дан массив:
const colors = ['red', 'green', 'blue']
Выведите в консоль его длину.
*/
console.log(`TASK 1:`);
{
    let colors: string[] = ['red', 'green', 'blue'];
    console.log(`Длинна нашего массива = ${colors.length}`);
}
/* [TASK 2] Дан массив:
const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны.
*/
console.log(`TASK 2:`);
{
    let animals: string[] = ['monkey', 'dog', 'cat'];
    console.log(animals[animals.length - 1]);
    console.log(_.last(animals));
}
/* [TASK 3] Дан массив:
    const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.
> Реализуйте решение двумя способами.
*/
console.log(`TASK 3:`);
{
    let numbers1: number[] = [5, 43, 63, 23, 90];
    for (let i: number = 0; i < numbers1.length; i++) {
        numbers1.splice(i);
    };
    console.log(numbers1.length);

    let numbers2: number[] = [5, 43, 63, 23, 90];
    for (let i: number = 0; i < numbers2.length; i++) {
        numbers2.slice(i);
    };
    console.log(numbers1.length);
}
/* [TASK 4] Дан массив:
    const students = ['Polina', 'Dasha', 'Masha']
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.
*/
console.log(`TASK 4:`);
{
    let students: string[] = ['Polina', 'Dasha', 'Masha'];
    let delLastElemAndAdd = students.splice(students.length - 1, students.length - 1, `Borya`);
    console.log(students);
    let delFirstElemAndAdd = students.splice(1, 1, `Andrey`);
    console.log(students);
}
/* [TASK 5] Дан массив:
    const cats = ['Gachito', 'Tom', 'Batman']
Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
*/
console.log(`TASK 5:`);
{
    let cats1: string[] = ['Gachito', 'Tom', 'Batman'];
    for (let i: number = 0; i < cats1.length; i++) {
        console.log(cats1[i]);
    };
    console.log(`----------`);
    let cats2: string[] = ['Gachito', 'Tom', 'Batman'];
    for (let value of cats2) {
        console.log(value);
    };
}
/* [TASK 6] 
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`**
*/
console.log(`TASK 6:`);
{
    let evenNumbers: number[] = [2, 4, 6, 8, 10];
    let oddNumbers: number[] = [1, 3, 5, 7, 9];
    let allNumbers: number[] = evenNumbers.concat(oddNumbers);
    console.log(`Индекс числа 8 = ${allNumbers.indexOf(8)}`);
}
/* [TASK 7] 
const binary = [0, 0, 0, 0]
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.
> [0, 0, 0, 0] -> '0101010'
*/
console.log(`TASK 7:`);
{
    let binary: number[] = [0, 0, 0, 0];
    let fullBunary: string = binary.map(getFullBunary => getFullBunary === 0 ? `01` : `1`).join('');
    console.log(fullBunary);
}
/* [TASK 1. Advanced level] 
Реализуйте функцию которая будет проверять, является ли слово палиндромом.
*/
console.log(`TASK 1. Advanced level`);
{
    function getStringtoArray(str: string): Array<string> {
        let arr: string[] = str.split(``);
        let polind: string[] = str.split(``).reverse();
        console.log(arr.toString() == polind.toString() ? `Your word is polindrom` : `Your word is not polindrom`);
        return polind;
    }
    getStringtoArray(`tenet`);
}
/* [TASK 2. Advanced level] 
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
> Выведите в консоль среднее значение чисел в многомерном массиве.
*/                                                                  //ЗАДАЧА РАЗБИРАЛАСЬ НА УРОКЕ
console.log(`TASK 2. Advanced level`);
{
    let matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ];
    //вариант 1
    let totalSum: number = 0;
    let totalLength: number = 0;
    let totalLength2: number = 0;
    matrix.forEach((line) => {
        totalLength += line.length;
        line.forEach((value) => {
            totalLength2++;
            totalSum += value;
        });
    });
    console.log(`Avg value = ${totalSum / totalLength2}`);
    //Вариант 2
    let flatteredArray = _.flattenDeep(matrix);
    let totalSum3: number = flatteredArray.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
    }, 0);
    let totalLength3: number = flatteredArray.length;
    console.log(`V3 - avg value = ${totalSum3 / totalLength3}`);
}
/* [TASK 3. Advanced level] 
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 
*/
console.log(`TASK 3. Advanced level`);
{
    let mixedNumbers: number[] = [-14, 24, -89, 43, 0, -1, 412, 4];
    let pozitiveArr: number[] = [];
    let negativeArr: number[] = [];
    for (let i: number = 0; i < mixedNumbers.length; i++) {
        mixedNumbers[i] < 0 ? negativeArr.push(mixedNumbers[i]) : pozitiveArr.push(mixedNumbers[i]);
    };
    console.log(pozitiveArr);
    console.log(negativeArr);
}
/* [TASK 4. Advanced level] 
Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
В конце вывести оба массива в консоль.
*/
console.log(`TASK 4. Advanced level`);
{
    function getArrayWithRandNum(maxNum: number, minNum: number): number[] {
        let arraWithFiveRandNum: number[] = [];
        for (let i: number = 0; i < 5; i++) {
            let RandNum: number = _.random(maxNum, minNum);
            arraWithFiveRandNum.unshift(RandNum);
        };
        return arraWithFiveRandNum;
    };
    let myArrayFromFunc = getArrayWithRandNum(200, 100);
    let newArr = myArrayFromFunc.map(test => Math.pow(test,3));
    console.log(myArrayFromFunc);
    console.log(newArr);
}
