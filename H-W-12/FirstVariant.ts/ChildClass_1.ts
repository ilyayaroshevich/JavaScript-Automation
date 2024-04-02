import { Car } from "./ParentClass";

class Mercedesbenz extends Car {
    carPrice: number;
    taxRate: number;
    minimumMoney: number;
    maximumMoney: number;


    constructor(minimumMoney: number, maximumMoney: number, carPrice: number, taxRate: number) {
        super(minimumMoney, maximumMoney);
        this.carPrice = carPrice;
        this.taxRate = taxRate;
    }
    isEnoughMoney(): string {
        const myWholeMoney = super.getMoneyForCar();
        if (myWholeMoney < this.carPrice) {
            throw new Error(`Sorry, you are not rich enough`);
        }
        const taxedPrice = this.carPrice * (this.taxRate / 100);
        if (myWholeMoney < taxedPrice) {
            throw new Error(`Sorry, you are still not have enough money`);
        }
        return `Congratilations! You can buy a car!`;
    }

    canAffordAdditionalServices(moneyForBlackDay: number): string {
        const myWholeMOney = super.getMoneyForCar();
        const taxedPrice = this.carPrice * (this.taxRate / 100);
        let cashBalance = myWholeMOney - taxedPrice;
        if (cashBalance < myWholeMOney * (moneyForBlackDay / 100)) {
            throw new Error(`Sorry, you cannot afford to buy additional services`);
        }
        return `Oh my, you can buy additional services yet!`;
    };
}

try {
    const newCar = new Mercedesbenz(100, 200, 10, 10);
    console.log(newCar.isEnoughMoney());
    console.log(newCar.canAffordAdditionalServices(5));
} catch (error) {
    console.error(error.message);
}