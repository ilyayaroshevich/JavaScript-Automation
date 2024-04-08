import * as classes from "./classes";
import * as methods from "./methods";


try {
    const newMercedesbenz = new classes.Mercedesbenz(100, 200, 10, 10);
    console.log(methods.isEnoughMoney.call(newMercedesbenz));
    console.log(methods.canAffordAdditionalServices.call(newMercedesbenz, 5));
} catch (error) {
    console.error(error);
}

try {
    let newLada = new classes.Lada(100, 200, 10);
    console.log(methods.calculateNumberOfCarsWithoutDiscount.call(newLada));
    console.log(methods.calculateNumberOfCarsWithDiscount.call(newLada, 5));
} catch (error) {
    console.error(error);
}


try {
    const newMercedesbenz = new classes.Mercedesbenz(200, 300, 5, 5);
    const mercedesbenzResults = [
        methods.isEnoughMoney.call(newMercedesbenz),
        methods.canAffordAdditionalServices.call(newMercedesbenz, 5),
    ];
    methods.write_json_sync('mercedesbenz_result.ts', mercedesbenzResults);
    let newLada = new classes.Lada(200, 300, 5);
    const ladaResults = [
        methods.calculateNumberOfCarsWithoutDiscount.call(newLada),
        methods.calculateNumberOfCarsWithDiscount.call(newLada, 5)
    ];
    methods.write_json_sync('lada_result.ts', ladaResults);
} catch (error) {
    console.error(error);
}

