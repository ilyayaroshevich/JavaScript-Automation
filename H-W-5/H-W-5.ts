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
console.log(getSlicedString('I love functions in TypeScript!', 2, 6));
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
    function GetSumOfNUmbersInRange(num1: number, num2: number): number {
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

        }
        return num1;
    }
    console.log(GetSumOfNUmbersInRange(1, 1));
}
/*------------------------------------------------------------[TASK_6]------------------------------------------------------------------------------------------------
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
+булевое значение
+функцию foo//callback1 которая выводит в консоль свое имя
+функцию boo//callback2 которая выводит в консоль свое имя
Если переданное булевое значение **true** запускаем функцию foo/callback1 иначе **boo/callback2
*/
console.log(`TASK_6`);
{
    let getBooleanFunc1Func2 = (bool: boolean, func1: Function, func2: Function) => (bool == false) ? func1() : func2();

    let func1 = () => console.log(`func1`);

    let func2 = () => console.log('func2');
    getBooleanFunc1Func2(true, func1, func2);
}
{



}
/*------------------------------------------------------------[TASK_7]------------------------------------------------------------------------------------------------
((a, b) => a+b)(5, 3); //a = 5, b = 3
Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции
*/
console.log(`TASK_7`);
{
    (function (ourNumber2: number) {
        let resultOffactorial: number = 1;
        for (let i: number = 1; i <= ourNumber2; i++) {
            resultOffactorial *= i;
        }
        console.log(resultOffactorial);
    })(7);
}
/*------------------------------------------------------------[TASK_1.ADVANCED_LEVEL]------------------------------------------------------------------------------------------------
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, 
если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.
*/
console.log(`TASK_1.ADVANCED LEVEL`);
{
    function getThreeSidesOfTriangle(a: number, b: number, c: number): boolean {
        return ((a + b > c) && (a + c > b) && (b + c > a) && (a + b != c) && (a + c != b) && (b + c != a) && (a > 0) && (b > 0) && (c > 0)) ? true : false
    };
    console.log(getThreeSidesOfTriangle(2, 2, 3));
    console.log(getThreeSidesOfTriangle(-1, 2, 3));
}
/*------------------------------------------------------------[TASK_2.ADVANCED_LEVEL]------------------------------------------------------------------------------------------------
Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. 
Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.
*/
console.log(`TASK_2.ADVANCED LEVEL`);

function getAmountOfChocolateSpread(a: number, b: number, side: Function): void {
    let minNumOfSpreads = side(a, b);
    minNumOfSpreads > 0 ? console.log(`Минимальное количество разломов: ${(minNumOfSpreads)}`) :
        console.log(`Входные данные недействительны: 0`)
};
getAmountOfChocolateSpread(1, 1, side);

function side(a: number, b: number): number {
    return ((a * b) - 1);
};
/*------------------------------------------------------------[TASK_3.ADVANCED_LEVEL]------------------------------------------------------------------------------------------------
Напишите программу для вычисления общей стоимости покупки телефонов. 
Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. 
Вы также будете покупать аксессуары для каждого из телефонов.
После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
*/
console.log('`TASK_3.ADVANCED LEVEL`');
{
    function buyingPhoneAndStaf(myAccount: number, tax: number, minPriceOfPhone: number, maxPriceOfPhone: number, minPriceOfStaff: number, maxPriceOfStaff: number,
        getBalanceOfAccount: Function, getTax: Function, getPriceOfPhone: Function, getPriceOfStaff: Function) {

        let myBalance = getBalanceOfAccount(myAccount);
        let mytax = getTax(tax);
        let phonePrice = getPriceOfPhone(minPriceOfPhone, maxPriceOfPhone);
        let staffPrice = getPriceOfStaff(minPriceOfStaff, maxPriceOfStaff);
        let totalSumReceipt = 0;

        for (let i = phonePrice + staffPrice; i <= myBalance; i++) {
            totalSumReceipt = i++
            
        }
        let totalSumReceiptWithTax: string = (totalSumReceipt + ((totalSumReceipt / 100) * mytax)).toFixed(2);
        console.log(`Окончательная сумма покупки: ${totalSumReceiptWithTax} BYN`);
        console.log(`Ваш баланс: ${myBalance} BYN`);
        return +totalSumReceiptWithTax <= myBalance ? console.log(`Вы купили телефонов и аксессуаров на сумму: ${totalSumReceiptWithTax} BYN`) : console.log(`У Вас недостаточно средств`);
    }
    buyingPhoneAndStaf(10000, 20, 2000, 3000, 253, 299, getBalanceOfAccount, getTax, getPriceOfPhone, getPriceOfStaff);





    function getPriceOfPhone(minPriceOfphone: number, maxPriceOfPhone: number): number {
        let random1 = (Math.random() * (maxPriceOfPhone - minPriceOfphone) + minPriceOfphone).toFixed(2);
        return +random1;
    }

    function getPriceOfStaff(minStaffOfphone: number, maxStaffOfPhone: number): number {
        let random2 = (Math.random() * (maxStaffOfPhone - minStaffOfphone) + minStaffOfphone).toFixed(2);
        return +random2;
    }

    function getBalanceOfAccount(balance: number) {
        return balance;
    }

    function getTax(tax: number) {
        return tax;
    }















}