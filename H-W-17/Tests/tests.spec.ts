import { Calculator } from "../Src/CalculatorClass";
import * as assert from 'assert';
import { expect } from "chai";

// describe("Mocha + asserts tests", () => {
//     it("checks additions two positive digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(2, 3, 'add');
//         assert.equal(result, 5);
//     });
//     it("checks additions one positive and one negative digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(-2, 3, 'add');
//         assert.equal(result, 1);
//     });
//     it("checks subtractions two positive digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(5, 2, 'subtract');
//         assert.equal(result, 3);
//     });
//     it("checks subtractions one positive and one negative digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(-5, 2, 'subtract');
//         assert.equal(result, -7);
//     });
//     it("checks multiply two positive digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(3, 2, 'multiply');
//         assert.equal(result, 6);
//     });
//     it("checks multiply one positive and one negative digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(-3, 2, 'multiply');
//         assert.equal(result, -6);
//     });
//     it("checks multiply one positive and one 0", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(3, 0, 'multiply');
//         assert.equal(result, 0);
//     });
//     it("checks dividing two positive digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(10, 2, 'divide');
//         assert.equal(result, 5);
//     });
//     it("checks dividing one positive and one negative digits", () => {
//         const calculator = new Calculator();
//         const result = calculator.calculate(-10, 2, 'divide');
//         assert.equal(result, -5);
//     });
//     it("checks dividing one positive and one 0", () => {
//         const calculator = new Calculator();
//         assert.throws(() => {
//             calculator.calculate(10, 0, 'divide');
//         }, Error);
//     });
// });

describe("Mocha + chai tests", () => {
    it("checks additions two positive digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(2, 3, 'add');
        expect(result).to.equal(5, "Result is not equal to expected result");
    });
    it("checks additions one positive and one negative digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(-2, 3, 'add');
        expect(result, "Result is not equal to expected result").to.equal(1);
    });
    it("checks subtractions two positive digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(5, 2, 'subtract');
        expect(result, "Result is not equal to expected result").to.equal(3);
    });
    it("checks subtractions one positive and one negative digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(-5, 2, 'subtract');
        expect(result, "Result is not equal to expected result").to.equal(-7);
    });
    it("checks multiply two positive digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(3, 2, 'multiply');
        expect(result, "Result is not equal to expected result").to.equal(6);
    });
    it("checks multiply one positive and one negative digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(-3, 2, 'multiply');
        expect(result, "Result is not equal to expected result").to.equal(-6);
    });
    it("checks multiply one positive and one 0", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(3, 0, 'multiply');
        expect(result, "Result is not equal to expected result").to.equal(0);
    });
    it("checks dividing two positive digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(10, 2, 'divide');
        expect(result, "Result is not equal to expected result").to.equal(5);
    });
    it("checks dividing one positive and one negative digits", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(-10, 2, 'divide');
        expect(result, "Result is not equal to expected result").to.equal(-5);
    });
    it("checks dividing one positive and one 0", () => {
        const calculator = new Calculator();
        const result = calculator.calculate(-10, 2, 'divide');
        expect(result, "Result is not equal to expected result").to.throw(Error);
    });
});