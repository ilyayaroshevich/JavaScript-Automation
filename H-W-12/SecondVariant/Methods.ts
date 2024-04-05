import * as _ from "lodash";

export function getMoneyForCar(minimumMoney:number,maximumMoney:number): number {
    const moneyForCar = _.random(minimumMoney, maximumMoney);
    return moneyForCar;
}

export function isEnoughMoney(): string {
    const myWholeMoney: number = getMoneyForCar.call(this.minimumMoney, this.maximumMoney);
    const carPrice = this.carPrice;
    const taxRate = this.taxRate;

    if (myWholeMoney < carPrice) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    const taxedPrice = carPrice * (taxRate / 100);
    if (myWholeMoney < taxedPrice) {
        throw new Error(`Sorry, you are still not have enough money`);
    }
    return `Congratilations! You can buy a car!`;
}

export function canAffordAdditionalServices(moneyForBlackDay:number): string {
    const myWholeMoney: number = getMoneyForCar.call(this.minimumMoney, this.maximumMoney);
    const carPrice = this.carPrice;
    const taxRate = this.taxRate;
    const taxedPrice = carPrice * (taxRate / 100);
    const cashBalance = myWholeMoney - taxedPrice;
    if (cashBalance < myWholeMoney * (moneyForBlackDay / 100)) {
        throw new Error(`Sorry, you cannot afford to buy additional services`);
    }
    return `Oh my, you can buy additional services yet!`;
}

export function calculateNumberOfCarsWithoutDiscount(): string {
    const myWholeMoney: number = getMoneyForCar.call(this.minimumMoney, this.maximumMoney);
    const carPrice = this.carPrice;
    let numberOfCars = Math.floor(myWholeMoney / carPrice);
    if (numberOfCars <= 0) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    return `Wow! You can buy ${numberOfCars} car(s)!!`;
}

export function calculateNumberOfCarsWithDiscount(personalDiscount: number): string {
    const myWholeMoney: number = getMoneyForCar.call(this.minimumMoney, this.maximumMoney);
    const carPrice = this.carPrice;
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
