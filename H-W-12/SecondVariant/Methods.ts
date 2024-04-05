import * as _ from "lodash";
import { Lada, Mercedesbenz, Car } from "./classes";

export function getMoneyForCar(car: Mercedesbenz | Car | Lada): number {
    const moneyForCar = _.random(car.minimumMoney, car.maximumMoney);
    return moneyForCar;
}

export function isEnoughMoney(car: Mercedesbenz): string {
    const myWholeMoney: number = getMoneyForCar(car);
    const carPrice = car.carPrice;
    const taxRate = car.taxRate;

    if (myWholeMoney < carPrice) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    const taxedPrice = carPrice * (taxRate / 100);
    if (myWholeMoney < taxedPrice) {
        throw new Error(`Sorry, you are still not have enough money`);
    }
    return `Congratilations! You can buy a car!`;
}

export function canAffordAdditionalServices(car: Mercedesbenz, moneyForBlackDay: number): string {
    const myWholeMoney: number = getMoneyForCar(car);
    const carPrice = car.carPrice;
    const taxRate = car.taxRate;
    const taxedPrice = carPrice * (taxRate / 100);
    const cashBalance = myWholeMoney - taxedPrice;
    if (cashBalance < myWholeMoney * (moneyForBlackDay / 100)) {
        throw new Error(`Sorry, you cannot afford to buy additional services`);
    }
    return `Oh my, you can buy additional services yet!`;
}

export function calculateNumberOfCarsWithoutDiscount(car: Lada): string {
    const myWholeMoney: number = getMoneyForCar(car);
    const carPrice = car.carPrice;
    let numberOfCars = Math.floor(myWholeMoney / carPrice);
    if (numberOfCars <= 0) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    return `Wow! You can buy ${numberOfCars} car(s)!!`;
}

export function calculateNumberOfCarsWithDiscount(car: Lada, personalDiscount: number): string {
    const myWholeMoney: number = getMoneyForCar(car);
    const carPrice = car.carPrice;
    if (personalDiscount < 0 || personalDiscount > 100) {
        throw new Error('Invalid discount value');
    }
    let numberOfCars: number = 0;
    let totalSumWithDiscount = carPrice * (personalDiscount / 100);
    for (let i = carPrice; i <= myWholeMoney; i += carPrice - totalSumWithDiscount) {
        numberOfCars++;
    }
    if (numberOfCars == 0) {
        throw new Error(`Sorry, you are not rich enough even with dicount :(`);
    }
    return `Wow! You can buy ${numberOfCars} car(s) with discount!!`;
}
