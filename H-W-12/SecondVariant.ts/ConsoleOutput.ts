import { Mercedesbenz, Lada } from "./Classes";
import { isEnoughMoney, canAffordAdditionalServices, calculateNumberOfCarsWithoutDiscount, calculateNumberOfCarsWithDiscount } from "./Methods";

try {
    const newMercedesbenz = new Mercedesbenz(100, 200, 10, 10);
    console.log(isEnoughMoney(newMercedesbenz.getMoneyForCar(), newMercedesbenz.carPrice, newMercedesbenz.taxRate));
    console.log(canAffordAdditionalServices(newMercedesbenz.getMoneyForCar(), newMercedesbenz.carPrice, newMercedesbenz.taxRate, 5));
} catch (error) {
    console.error(error.message);
}

try {
    let newLada = new Lada(100, 200, 10);
    console.log(calculateNumberOfCarsWithoutDiscount(newLada.getMoneyForCar(), newLada.carPrice));
    console.log(calculateNumberOfCarsWithDiscount(newLada.getMoneyForCar(), newLada.carPrice,5));
} catch (error) {
    console.error(error.message);
}