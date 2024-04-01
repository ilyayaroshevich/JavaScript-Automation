import { Car } from "./HW12_1";

class Mercedesbenz extends Car {
    model: string;
    price: number;
    discount: number;
    tax: number;
    constructor(model: string, year: number, price: number, discount: number, tax: number) {
        super(year);
        this.model = model;
        this.price = price;
        this.discount = discount;
        this.tax = tax;
    }
    getSpecificCarPrice() {
        if (this.model !== "A-Class") {
            throw new Error(`Mercedes-Benz model must be A-Class.`)
        }
        let price1 = ((this.price * (this.discount / 100)) * (this.tax / 100)) * 100;
        return {
            model: this.model,
            year: super.carInfo(),
            price: price1,
        };
    }
}

try {
let newVers = new Mercedesbenz("A-Class", 1996, 1052, 10, 12);
console.log(`${JSON.stringify(newVers.getSpecificCarPrice())}`);
} catch (error) {
    console.error("An error occurred:", error.message);
}