import { Calculator } from "../../Src/CalculatorClass";
import * as assert from 'assert';
import { expect } from "chai";


describe("Mocha + asserts tests", () => {
    let calculator: Calculator;
    before(() => {
        calculator = new Calculator();
        console.log(`Тестирование начато!`);
    });
    it("checks additions two positive digits", () => {
        const result: number = calculator.calculate(2, 3, 'add');
        assert.strictEqual(result, 5, "The result of the addition should be 5");
        assert.ok(result > 0, "The result of the addition should be positive");
    });
    it("checks additions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-2, 3, 'add');
        assert.strictEqual(result, 1, "The result of the addition should be 1");
        assert.ok(result > -3, "The result of the addition should be greater than -3");
    });
    it("checks subtractions two positive digits", () => {
        const result: number = calculator.calculate(5, 2, 'subtract');
        assert.strictEqual(result, 3, "The result of the subtraction should be 3");
        assert.ok(result > 0, "The result of the subtraction should be positive");
    });
    it("checks subtractions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-5, 2, 'subtract');
        assert.strictEqual(result, -7, "The result of the subtraction should be -7");
        assert.ok(result < 0, "The result of the subtraction should be negative");
    });
    it("checks multiply two positive digits", () => {
        const result: number = calculator.calculate(3, 2, 'multiply');
        assert.strictEqual(result, 6, "The result of the multiply should be 6");
        assert.ok(result > 0, "The result of the multiply should be positive");
    });
    it("checks multiply one positive and one negative digits", () => {
        const result: number = calculator.calculate(-3, 2, 'multiply');
        assert.strictEqual(result, -6, "The result of the multiply should be -6");
        assert.ok(result < 0, "The result of the multiply should be negative");
    });
    it("checks multiply one positive and one 0", () => {
        const result: number = calculator.calculate(3, 0, 'multiply');
        assert.strictEqual(result, 0, "The result of the multiply should be 0");
        assert.ok(result === 0, "The result of the multiply should be 0");
    });
    it("checks dividing two positive digits", () => {
        const result: number = calculator.calculate(10, 2, 'divide');
        assert.strictEqual(result, 5, "The result of the divide should be 5");
        assert.ok(result > 0, "The result of the divide should be positive");
    });
    it("checks dividing one positive and one negative digits", () => {
        const result: number = calculator.calculate(-10, 2, 'divide');
        assert.strictEqual(result, -5, "The result of the divide should be -5");
        assert.ok(result < 0, "The result of the divide should be negative");
    });
    it("checks dividing one positive and one 0", () => {
        assert.throws(() => {
            calculator.calculate(10, 0, 'divide');
        }, Error, "Divide by 0 is not allowed");
    });
});

describe("Mocha + chai tests", () => {
    let calculator: Calculator;
    before(() => {
        calculator = new Calculator();
        console.log(`Тестирование начато!`);
    });
    it("checks additions two positive digits", () => {
        const result: number = calculator.calculate(2, 3, 'add');
        expect(result).to.equal(5, "The result of the addition should be 5");
        expect(result).to.be.above(0, "The result of the addition should be positive");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks additions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-2, 3, 'add');
        expect(result, "The result of the addition should be 1").to.equal(1);
        expect(result).to.be.above(-3, "The result of the addition should be greater than -3");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks subtractions two positive digits", () => {
        const result: number = calculator.calculate(5, 2, 'subtract');
        expect(result, "The result of the subtraction should be 3").to.equal(3);
        expect(result).to.be.above(0, "The result of the subtraction should be positive");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks subtractions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-5, 2, 'subtract');
        expect(result, "The result of the subtraction should be -7").to.equal(-7);
        expect(result).to.be.below(0, "The result of the subtraction should be negative");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks multiply two positive digits", () => {
        const result: number = calculator.calculate(3, 2, 'multiply');
        expect(result, "The result of the multiply should be 6").to.equal(6);
        expect(result).to.be.above(0, "The result of the multiply should be positive");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks multiply one positive and one negative digits", () => {
        const result: number = calculator.calculate(-3, 2, 'multiply');
        expect(result, "The result of the multiply should be -6").to.equal(-6);
        expect(result).to.be.below(0, "The result of the multiply should be negative");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks multiply one positive and one 0", () => {
        const result: number = calculator.calculate(3, 0, 'multiply');
        expect(result, "The result of the multiply should be 0").to.equal(0);
        expect(result).to.be.equal(0, "The result of the multiply should be 0");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks dividing two positive digits", () => {
        const result: number = calculator.calculate(10, 2, 'divide');
        expect(result, "The result of the divide should be 5").to.equal(5);
        expect(result).to.be.above(0, "The result of the divide should be positive");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks dividing one positive and one negative digits", () => {
        const result: number = calculator.calculate(-10, 2, 'divide');
        expect(result, "The result of the divide should be -5").to.equal(-5);
        expect(result).to.be.below(0, "The result of the divide should be negative");
        expect(result).to.be.a('number', 'The result should be number');
    });
    it("checks dividing one positive and one 0", () => {
        expect(calculator.calculate.bind(calculator, 10, 0, 'divide'), "Dividing by 0 is not allowed").to.throw(Error);
    });
    after(() => {
        console.log(`Тестирование закончено!`)
    });
});

