import { Calculator } from "../../Src/CalculatorClass";
import { describe, expect, test } from '@jest/globals';

describe("Jest tests", () => {
    let calculator: Calculator;
    beforeAll(() => {
        calculator = new Calculator();
        console.log(`Тестирование начато!`);
    });

    test("checks additions two positive digits", () => {
        const result: number = calculator.calculate(2, 3, 'add');
        expect(result).toBe(5);
    });

    test("checks additions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-2, 3, 'add');
        expect(result).toBe(1);
    });

    test("checks subtractions two positive digits", () => {
        const result: number = calculator.calculate(5, 2, 'subtract');
        expect(result).toBe(3);
    });

    test("checks subtractions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-5, 2, 'subtract');
        expect(result).toBe(-7);
    });

    test("checks multiply two positive digits", () => {
        const result: number = calculator.calculate(3, 2, 'multiply');
        expect(result).toBe(6);
    });

    test("checks multiply one positive and one negative digits", () => {
        const result: number = calculator.calculate(-3, 2, 'multiply');
        expect(result).toBe(-6);
    });

    it("checks multiply one positive and one 0", () => {
        const result: number = calculator.calculate(3, 0, 'multiply');
        expect(result).toBe(0);
    });

    test("checks dividing two positive digits", () => {
        const result: number = calculator.calculate(10, 2, 'divide');
        expect(result).toBe(5);
    });

    test("checks dividing one positive and one negative digits", () => {
        const result: number = calculator.calculate(-10, 2, 'divide');
        expect(result).toBe(-5);
    });

    it("checks dividing one positive and one 0", () => {
        expect(() => calculator.calculate(10, 0, 'divide')).toThrowError(Error);
    });

    afterAll(() => {
        console.log(`Тестирование закончено!`)
    });

});