import { sum } from "lodash";

/*
#### Task 1 🖥

Выведи все элементы массива в консоль с помощью метода **`forEach`**
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
*/
console.log(`TASK 1:`);
{
    //let fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    function showArrayElements(array: number[]): void {
        array.forEach((elements) => console.log(elements))
    };
    showArrayElements([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);

    let showArrayElements1 = (array1: number[]): void => array1.forEach((elements1) => console.log(elements1));
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
    //const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
    function createNewUsersArray(userArray: string[]): void {
        const newUsersArray = userArray.map((user, index) => `member ${index + 1}: ${user}`);
        console.log(newUsersArray);
    };
    createNewUsersArray(['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']);

    let createNewUsersArray1 = (userArray1: string[]): void => {
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
    function createPositiveArray(numArray: number[]): void {
        const filteredNumbers = numArray.filter((number) => number > 0);
        console.log(filteredNumbers);
    };
    createPositiveArray([7, -4, 32, -90, 54, 32, -21]);

    let createPositiveArray1 = (numArray1: number[]): void => {
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
    function getSumOfArrayValue(array: number[]): void {
        let newFibonacci = array.reduce((sum, current) => sum + current, 0);
        console.log(newFibonacci);
    };
    getSumOfArrayValue([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);

    let showArrayElements1 = (array1: number[]): void => {
        let newFibonacci = array1.reduce((sum, current) => sum + current, 0);
        console.log(newFibonacci);
    };
    showArrayElements1([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
}