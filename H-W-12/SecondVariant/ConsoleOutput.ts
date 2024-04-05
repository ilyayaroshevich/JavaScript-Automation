import * as classes from "./classes";
import * as methods from "./methods";

try {
    const newMercedesbenz = new classes.Mercedesbenz(100, 200, 10, 10);
    console.log(methods.isEnoughMoney(newMercedesbenz));
    console.log(methods.canAffordAdditionalServices(newMercedesbenz, 5));
} catch (error) {
    console.error(error.message);
}

try {
    let newLada = new classes.Lada(100, 200, 10);
    console.log(methods.calculateNumberOfCarsWithoutDiscount(newLada));
    console.log(methods.calculateNumberOfCarsWithDiscount(newLada, 5));
} catch (error) {
    console.error(error.message);
}