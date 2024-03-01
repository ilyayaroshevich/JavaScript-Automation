/*------------------------------------------------------------[TASK_1]------------------------------------------------------------------------------------------------
Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)*/
console.log(`TASK_1`);
{
    function calcSumFromZeroToNum(num: number): number {
        let total_sum: number = 0;
        for (let i: number = 0; i <= num; i++) {
            total_sum += i;
        };
        return total_sum;
    }
    console.log(`Сумма чисел от 0 до введённого числа = ${calcSumFromZeroToNum(123)}`);
}
/*------------------------------------------------------------[TASK_2]------------------------------------------------------------------------------------------------
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и 
верните результат переплаты по кредиту:
+ процентная ставка в год — 17%,
+ количество лет — 5.*/
console.log(`TASK_2`);
{
    let getOverPaymentByCredit = (numOfMoney: number, ratePerYear: number = 17, creditPeriod: number = 5): number => (ratePerYear * numOfMoney * creditPeriod) / 100;
    console.log(getOverPaymentByCredit(10000));
}
/*------------------------------------------------------------[TASK_3]------------------------------------------------------------------------------------------------
Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
+ строку
+ значение от
+ значение по*/
console.log(`TASK_3`);
{
    function getSlicedString(anyStr: String, from: number, by: number): string {
        return `${anyStr.slice(from, by)}`;
    }
}
console.log(getSlicedString('I love function in TypeScript!', 2, 6));
/*------------------------------------------------------------[TASK_4]------------------------------------------------------------------------------------------------
Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
> Для 2021 это будет 5.*/
console.log(`TASK_4`);
{
    function getSumOfNumbers(numberInString: string): number {
        let stringFromNumber: string = numberInString.toString();
        let sum: number = 0;
        for (let i: number = 0; i < stringFromNumber.length; i++) {
            sum += +stringFromNumber.charAt(i);
        }
        return sum
    }
    console.log(getSumOfNumbers('99'));
}
/*------------------------------------------------------------[TASK_5]------------------------------------------------------------------------------------------------
Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их,
и вернуть ее. Если два числа равны, верните a или b.
    getSum(1, 0)   // 1 + 0 = 1
    getSum(1, 2)   // 1 + 2 = 3
    getSum(0, 1)  // 0 + 1 = 1
    getSum(1, 1)   // 1 Since both are same
    getSum(-1, 0) // -1 + 0 = -1
    getSum(-1, 2)  // -1 + 0 + 1 + 2 = 2
*/
console.log(`TASK_5`);
{
    function GetSumOfNUmbersInRange(num1: number, num2: number): any {
        let sum: number = 0;
        if (num1 < num2 && num1 != num2) {
            for (num1; num1 <= num2; num1++) {
                sum += num1;
            }
            return sum

        }
        else if (num1 > num2 && num1 != num2) {
            for (num2; num2 <= num1; num2++) {
                sum += num2;
            }
            return sum

        }
        else if (num1 == num2) {
            return sum = num1; //поправить
        }

    }
    console.log(GetSumOfNUmbersInRange(-1, -1));
}
