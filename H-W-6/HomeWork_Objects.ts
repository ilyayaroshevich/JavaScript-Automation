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
        'cucumber': 5
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
        huawei: 5000,
        iphone: 10000
    };
    console.log(`------------------------------`)
    console.log(phonePrice.hasOwnProperty("iphone"));
    console.log(`------------------------------`)
    console.log(Object.keys(phonePrice));
    console.log(`------------------------------`)
    console.log((typeof phonePrice['huawei'] !== "undefined") ? true : false);
    console.log(`------------------------------`)
    for (let huawei in phonePrice) {
        console.log(`${huawei} = ${phonePrice[huawei]}`);
    };
    console.log(`------------------------------`)
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
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    };

    for (let studentInfo in student) {
        console.log(`${studentInfo}`);
        console.log(`${student[studentInfo]}`);
    };
    console.log(`------------------------------`);
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
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
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
        alexandra: 199
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
    let CredentialInDB = {};
    let loginInDB: string = `IlyaLogin`;
    let passwordInDB: string = `IlyaPassword12345`;
    Object.assign(CredentialInDB, { loginInDB }, { passwordInDB });

    let enteredCredentials = {};
    let enteredLogin: string = `IlyaLogin`;
    let enteredPassword: string = `IlyaPassword12345`;
    Object.assign(enteredCredentials, { enteredLogin }, { enteredPassword });

    let compareLogin = (JSON.stringify(CredentialInDB['loginInDB']) == JSON.stringify(enteredCredentials['enteredLogin']));
    let comparePassword = (JSON.stringify(CredentialInDB['passwordInDB']) == JSON.stringify(enteredCredentials['enteredPassword']));
    console.log((compareLogin == comparePassword) ? `Добро пожаловать` : `Вы кто такие?`); 
}





