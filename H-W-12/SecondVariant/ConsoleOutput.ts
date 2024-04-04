import * as classes from "./Classes";
import * as methods from "./Methods";

try {
    const newMercedesbenz = new classes.Mercedesbenz(100, 200, 10, 10);
    console.log(methods.isEnoughMoney(newMercedesbenz.getMoneyForCar(), newMercedesbenz.carPrice, newMercedesbenz.taxRate));
    console.log(methods.canAffordAdditionalServices(newMercedesbenz.getMoneyForCar(), newMercedesbenz.carPrice, newMercedesbenz.taxRate, 5));
} catch (error) {
    console.error(error.message);
}

try {
    let newLada = new classes.Lada(100, 200, 10);
    console.log(methods.calculateNumberOfCarsWithoutDiscount(newLada.getMoneyForCar(), newLada.carPrice));
    console.log(methods.calculateNumberOfCarsWithDiscount(newLada.getMoneyForCar(), newLada.carPrice,5));
} catch (error) {
    console.error(error.message);
}