import { random } from "lodash";

export class Car {
    minimumMoney: number;
    maximumMoney: number;
   

    constructor(myMoneyMin:number, myMoneyMax:number) {
        this.minimumMoney=myMoneyMin;
        this.maximumMoney=myMoneyMax;
        
    }

    getMoneyForCar ():number {
        const moneyForCar = random(this.minimumMoney, this.maximumMoney);
        return moneyForCar;
    }
};
    
