import * as _ from "lodash";
/*
---------------------------------------------------------------------------------------[TASK 1]
удалять через деструктуризацию и ...
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 
*/
console.log("Task 1:");
{
    let bin: { potato?: number, eggs: number, tomato: number, cucumber?: number } =
    {
        potato: 123,
        eggs: 10,
        tomato: 90,
        'cucumber': 5,
    };
    delete bin.potato;
    delete bin['cucumber'];
    let { eggs, tomato, ...rest } = bin;
    console.log(bin);
    console.log(rest);
}
/*
---------------------------------------------------------------------------------------[TASK 2]
//сделать через for...in или .hasOwnProperty() или .keys()
Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true** 
*/
console.log("Task 2:");
{
    let phonePrice: {
        huawei: number, iphone: number
    } = {
        "huawei": 5000,
        iphone: 10000,
    };
    console.log('iphone' in phonePrice);
    console.log(phonePrice.hasOwnProperty("iphone"));
    let partKey = Object.keys(phonePrice);
    console.log(partKey.includes('huawei'));
    console.log((typeof phonePrice['huawei'] !== "undefined"));
}
/*
---------------------------------------------------------------------------------------[TASK 3]
сделать через for...in (Optional: как второй вариант можно сделать через .keys() & .values())
Дан обьект:
        const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.  
*/
console.log("Task 3:");
{
    let student = {
        name: 'John',
        age: 19,
        isHappy: true,
    };

    for (let studentInfo in student) {
        console.log(studentInfo);
        console.log(student[studentInfo]);
    };
    console.log(Object.keys(student));
    console.log(Object.values(student));
}
/*
---------------------------------------------------------------------------------------[TASK 4]
Дан обьект:
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
Вывести в консоль слово красный и синий 
*/
console.log("Task 4:");
{
    let colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий',
        },
    };
    let twoColor = colors['ru pum pu ru rum'];
    console.log(twoColor.red);
    console.log(twoColor.blue);
}
/*
---------------------------------------------------------------------------------------[TASK 5]
// + вывод на консоль
Дан обьект:
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }

Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную 
*/
console.log("Task 5:");
{
    let salaries = {
        andrey1: 500,
        sveta: 413,
        anton: 987,
        andrey2: 664,
        alexandra: 199,
    };
    let sum = 0;
    let amountOfKeys = Object.keys(salaries).length;
    for (let money in salaries) {
        sum += salaries[money];
    };
    let avgSalaries = sum / amountOfKeys;
    console.log(`${avgSalaries}`);
}
/*
---------------------------------------------------------------------------------------[TASK 6]
//решение через переменные
Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**. 
*/
console.log("Task 6:");
{
    validator(`Ilya`, `12345`, `Ilya`, `12345`, enterlogInCred);
    function validator(loginInBD: string, passwordInBD: string, enteredLogin2: string, enteredPassword2: string, enterlogInCred: Function) {
        let credInBD = { loginInBD, passwordInBD };
        let enteredCred = enterlogInCred(enteredLogin2, enteredPassword2);
        let compareOnlyLogin = (JSON.stringify(credInBD[`loginInBD`]) === JSON.stringify(enteredCred[`enteredLogin2`]));
        let compareOnlyPassword = (JSON.stringify(credInBD[`passwordInBD`]) === JSON.stringify(enteredCred[`enteredPassword2`]));
        console.log((compareOnlyLogin == true && compareOnlyPassword == true) ? `Welcome!` : `Who ARE you?`);
    }
    function enterlogInCred(enteredLogin2: string, enteredPassword2: string): object {
        return { enteredLogin2, enteredPassword2 };
    }
}
/*
---------------------------------------------------------------------------------------[TASK 1.ADVANCED]
// Формат вывода: Команда А забила X мячей, команда В забила Х мячей
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Д
авайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 
*/
console.log("Task 1.ADVANCED:");
{
    let teamA = { name: "Команда А", goals: 0, };
    let teamB = { name: "Команда Б", goals: 0, };
    function processMatchResult(matchResult: string) {
        let [teamAScore, teamBScore] = matchResult.split(":").map(Number);
        if (teamAScore > 9 || teamBScore > 9) {
            console.log("Счет не может превышать 9 мячей!");
            return;
        }
        console.log(`${teamA.name} забила ${teamAScore} мячей, ${teamB.name} забила ${teamBScore} мячей`);
    }
    // Пример использования
    processMatchResult("9:9");
}
/*
---------------------------------------------------------------------------------------[TASK 2.ADVANCED]
//Сравнить не ссылки и сами объекты
Даны два одинаковых обьекта. Сравните их так чтобы они были равны

```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
```
*/
console.log("Task 2.ADVANCED:");
{
    let student1 = {
        name: 'Polina',
        age: 27,
    };
    let student2 = {
        name: 'Polina',
        age: 27,
    };
    console.log((JSON.stringify(student1) === JSON.stringify(student2)));
}
/*
---------------------------------------------------------------------------------------[TASK 3.ADVANCED]
Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется во втором объекте. 
Объекты должны быть описаны с помощью типа или интерфейса
const cat = {
      name: 'Енчик',
      age: 3,
   }
*/
console.log("Task 3.ADVANCED:");
{
    type tempType = {
        name: string;
        age: number;
    };
    let cat: tempType = {
        name: 'Енчик',
        age: 3,
    };
    let copyCat: tempType = { ...cat }; //первый способ
    copyCat.name = "Ilya";
    console.log(cat);
    console.log(copyCat);

    let copyCat2: tempType = JSON.parse(JSON.stringify(cat)); //второй вариант
    copyCat2.name = "Ilya2";
    console.log(cat);
    console.log(copyCat2);

    let copyCat3: tempType = _.cloneDeep(cat); //третий вариант через lodash
    copyCat3.name = "Ilya3";
    console.log(cat);
    console.log(copyCat3);
}