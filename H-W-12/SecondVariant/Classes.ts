export class Car {
    minimumMoney: number;
    maximumMoney: number;

    constructor(minimumMoney:number, maximumMoney:number) {
        this.minimumMoney=minimumMoney;
        this.maximumMoney=maximumMoney;
    }
    
}

export class Mercedesbenz extends Car {
    carPrice: number;
    taxRate: number;

    constructor(minimumMoney: number, maximumMoney: number, carPrice: number, taxRate: number) {
        super(minimumMoney, maximumMoney);
        this.carPrice = carPrice;
        this.taxRate = taxRate;
    }
}

export class Lada extends Car {
    carPrice: number;

    constructor(minimumMoney: number, maximumMoney: number, carPrice: number) {
        super(minimumMoney, maximumMoney);
        this.carPrice = carPrice;
    }
}