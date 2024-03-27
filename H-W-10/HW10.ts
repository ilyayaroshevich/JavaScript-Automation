/*
#### Task 1 💻
Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`. 
(В задании используйте не только public модификатор, где это возможно)
*/
console.log(`Task 1:`);
{
    class Car {
        constructor(protected typeOfCar: string, protected typeOfEngine: string) { };

        public getCarInfo(): string {
            return `This is ${this.typeOfCar}. It has ${this.typeOfEngine} engine`;
        };
    };

    class SportCar extends Car {
        constructor(typeOfCar: string, typeOfEngine: string, private maxSpeed: number, private price: number) {
            super(typeOfCar, typeOfEngine);
        };

        public getCarInfo(): string {
            return `${super.getCarInfo()} and max speed equal to ${this.maxSpeed}. Approximate cost of the car is ${this.price}.`;
        };
    };

    class LuxuryCar extends Car {
        constructor(typeOfCar: string, typeOfEngine: string, private maxSpeed: number, private price: number) {
            super(typeOfCar, typeOfEngine);
        };

        public getCarInfo(): string {
            return `${super.getCarInfo()} and max speed equal to ${this.maxSpeed}. Approximate cost of the car is ${this.price}.`;
        };
    };
    let luxuryCar1 = new LuxuryCar('Mercedes-Benz', 'ICE', 300, 2000000);
    console.log(luxuryCar1.getCarInfo());

    let sportCar1 = new SportCar('BMW', 'Electric', 220, 1000000);
    console.log(sportCar1.getCarInfo());
}
/*
#### Task 2 💻
Создайте два объекта Person. Реализуйте метод, который выводит строку `My name is <this.name>`. 
И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя
*/
console.log(`Task 2:`);
{
    let freePreson: { name: string } = {
        name: 'Ilya1'
    };

    let busyPreson: { name: string } = {
        name: 'Ilya2'
    };

    function getMyNameIs() {
        return `My name is ${this.name}`
    };

    console.log(getMyNameIs.call(freePreson));
    console.log(getMyNameIs.call(busyPreson));
}
/*
#### Task 3 💻
Создайте два объекта машин. 
Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. 
К примеру `This car has 3 doors and this is left-hand drive car`
*/
console.log(`Task 3:`);
{
    let firstCar: { myCar: string } = {
        myCar: "Maybach"
    };

    let secondCar: { myCar: string } = {
        myCar: "Toyota"
    };

    function getCarInfoCar(amountOfDoors: number, steeringPosition: string) {
        return `${this.myCar} has ${amountOfDoors} doors and this is ${steeringPosition}-hand drive car`
    };

    console.log(getCarInfoCar.call(firstCar, 4, 'left'));
    console.log(getCarInfoCar.call(secondCar, 3, 'right'));
}