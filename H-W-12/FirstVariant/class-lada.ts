import { Car } from "./class-car";

class Lada extends Car {
    carPrice: number;


    constructor(minimumMoney: number, maximumMoney: number, carPrice: number) {
        super(minimumMoney, maximumMoney);
        this.carPrice = carPrice;
    }
    calculateNumberOfCarsWithoutDiscount(): string {
        const myWholeMOney = super.getMoneyForCar();
        let numberOfCars = Math.floor(myWholeMOney / this.carPrice);
        if (numberOfCars * this.carPrice > myWholeMOney) {
            throw new Error(`Sorry, you are not rich enough`);
        }
        return `Wow! You can buy ${numberOfCars} car(s)!!`;
    }

    calculateNumberOfCarsWithDiscount(personalDiscount: number): string {
        if (personalDiscount < 0 || personalDiscount > 100) {
            throw new Error('Invalid discount value');
        }
        const myWholeMOney = super.getMoneyForCar();
        let numberOfCars: number = 0;
        let totalSumWithDiscount: number = this.carPrice * (personalDiscount / 100);
        for (let i = this.carPrice; i <= myWholeMOney; i += this.carPrice - totalSumWithDiscount) {
            numberOfCars++;
        }
        if (numberOfCars * totalSumWithDiscount > myWholeMOney) {
            throw new Error(`Sorry, you are not rich enough even with discount :(`);
        }
        return `Wow! You can buy ${numberOfCars} car(s) with discount!!`;
    }
}

try {
    let newVers = new Lada(100, 200, 10);
    console.log(newVers.calculateNumberOfCarsWithoutDiscount());
    console.log(newVers.calculateNumberOfCarsWithDiscount(5));
} catch (error) {
    console.error(error.message);
}