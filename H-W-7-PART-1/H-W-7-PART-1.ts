import * as _ from "lodash";
/* [TASK 1] Дан массив:
const colors = ['red', 'green', 'blue']
Выведите в консоль его длину.
*/
console.log(`TASK 1:`);
{
    let colors = ['red', 'green', 'blue'];
    console.log(`Длинна нашего массива = ${colors.length}`);
}
/* [TASK 2] Дан массив:
const animals = ['monkey', 'dog', 'cat']
Выведите в консоль его последний элемент вне зависимости от его длинны.
*/
console.log(`TASK 2:`);
{
    let animals = ['monkey', 'dog', 'cat'];
    console.log(animals[animals.length - 1]);
}
/* [TASK 3] Дан массив:
    const numbers = [5, 43, 63, 23, 90]
Удалите все элементы в массиве и выведите в консоль полученный результат.
> Реализуйте решение двумя способами.
*/
console.log(`TASK 3:`);
{
    let numbers1 = [5, 43, 63, 23, 90];
    for (let i: number = 0; i < numbers1.length; i++) {
        numbers1.splice(i);
    }
    console.log(numbers1);

    let numbers2 = [5, 43, 63, 23, 90];
    for (let i: number = 0; i < numbers2.length; i++) {
        numbers2.slice(i);
    }
    console.log(numbers1);

    let numbers3 = [5, 43, 63, 23, 90];
    for (let i: number = 0; i < numbers3.length; i++) {
        delete numbers3[i];
    }
    console.log(numbers3);
}
/* [TASK 4] Дан массив:
    const students = ['Polina', 'Dasha', 'Masha']
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.
*/
console.log(`TASK 4:`);
{
    let students = ['Polina', 'Dasha', 'Masha'];
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
    let cats1 = ['Gachito', 'Tom', 'Batman'];
    for (let i: number = 0; i < cats1.length; i++) {
        console.log(cats1[i]);
    }
    console.log(`----------`)
    let cats2 = ['Gachito', 'Tom', 'Batman'];
    for (let value of cats2) {
        console.log(value);
    }
}
/* [TASK 6] 
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
+ Соедините два массива чисел в один.
*/
console.log(`TASK 6:`);
{
    let evenNumbers = [2, 4, 6, 8, 10];
    let oddNumbers = [1, 3, 5, 7, 9];
    let allNumbers = evenNumbers.concat(oddNumbers);
    console.log(allNumbers);
}
/* [TASK 7] 
const binary = [0, 0, 0, 0]
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.

> [0, 0, 0, 0] -> '0101010'
*/
console.log(`TASK 7:`)
{
    let binary = [0, 0, 0, 0];
    let fullBunary = binary.map(getFullBunary => getFullBunary === 0 ? `01` : `1`).join('');
    console.log(fullBunary);
}