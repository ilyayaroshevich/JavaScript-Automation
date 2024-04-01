import {Car} from "./HW12_1";

class Toyota extends Car {
    model: string;
    price: number;
    discount: number;
    tax: number;
    constructor(model: string, year:number, price:number, discount:number, tax:number) {
        super(year);
        this.model = model;
        this.price = price;
        this.discount = discount;
        this.tax = tax;
    }

    
}
