export function isEnoughMoney(myWholeMoney: number, carPrice: number, taxRate: number): string {
    if (myWholeMoney < carPrice) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    const taxedPrice = carPrice * (taxRate / 100);
    if (myWholeMoney < taxedPrice) {
        throw new Error(`Sorry, you are still not have enough money`);
    }
    return `Congratilations! You can buy a car!`;
}

export function canAffordAdditionalServices(myWholeMOney: number, carPrice: number, taxRate: number, moneyForBlackDay: number): string {
    const taxedPrice = carPrice * (taxRate / 100);
    let cashBalance = myWholeMOney - taxedPrice;
    if (cashBalance < myWholeMOney * (moneyForBlackDay / 100)) {
        throw new Error(`Sorry, you cannot afford to buy additional services`);
    }
    return `Oh my, you can buy additional services yet!`;
}

export function calculateNumberOfCarsWithoutDiscount(myWholeMOney: number, carPrice: number): string {
    let numberOfCars = Math.floor(myWholeMOney / carPrice);
    if (numberOfCars <= 0) {
        throw new Error(`Sorry, you are not rich enough`);
    }
    return `Wow! You can buy ${numberOfCars} car(s)!!`;
}

export function calculateNumberOfCarsWithDiscount(myWholeMOney: number, carPrice: number, personalDescount: number): string {
    if (personalDescount < 0 || personalDescount > 100) {
        throw new Error('Invalid discount value');
    }
    let numberOfCars: number = 0;
    let totalSumWithDiscount = carPrice * (personalDescount / 100);
    for (let i = carPrice; i <= myWholeMOney; i += carPrice - totalSumWithDiscount) {
        numberOfCars++;
    }
    if (numberOfCars == 0) {
        throw new Error(`Sorry, you are not rich enough even with dicount :(`);
    }
    return `Wow! You can buy ${numberOfCars} car(s) with discount!!`;
}
