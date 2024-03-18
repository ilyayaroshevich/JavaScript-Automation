/*
Создайте класс Animal, в конструктор которого передается имя, и с помощью метода данного класса можно вывести фразу `This is a <animalType>. 
It's name is <name>`. Так же данный класс должен иметь статическое поле animalType, значение которого должно подставляться в фразу, которую выводит метод выше.
*/
class Animal {
    static animalType: string = "Cat";
    constructor(public animalName: string) {
        this.animalName = animalName;
    }
    print() {
        console.log(`This is a ${Animal.animalType}. It's name is ${this.animalName}`);
    }
}
let myAnimal = new Animal(`Barsik`);
myAnimal.print();