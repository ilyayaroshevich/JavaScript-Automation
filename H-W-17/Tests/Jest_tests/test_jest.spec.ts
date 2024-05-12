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
        expect(result).toBeGreaterThan(0);
    });

    test("checks additions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-2, 3, 'add');
        expect(result).toBe(1);
        expect(result).toBeGreaterThan(0);
    });

    test("checks subtractions two positive digits", () => {
        const result: number = calculator.calculate(5, 2, 'subtract');
        expect(result).toBe(3);
        expect(result).toBeDefined();
    });

    test("checks subtractions one positive and one negative digits", () => {
        const result: number = calculator.calculate(-5, 2, 'subtract');
        expect(result).toBe(-7);
        expect(result).not.toBeNull();
    });

    test("checks multiply two positive digits", () => {
        const result: number = calculator.calculate(3, 2, 'multiply');
        expect(result).toEqual(6);
        expect(result).toBeDefined();
    });

    test("checks multiply one positive and one negative digits", () => {
        const result: number = calculator.calculate(-3, 2, 'multiply');
        expect(result).toBe(-6);
        expect(result).not.toBeUndefined();
    });

    it("checks multiply one positive and one 0", () => {
        const result: number = calculator.calculate(3, 0, 'multiply');
        expect(result).toEqual(0);
        expect(result).toBeFalsy();
    });

    test("checks dividing two positive digits", () => {
        const result: number = calculator.calculate(10, 2, 'divide');
        expect(result).toBe(5);
        expect(result).toBeLessThan(10);
    });

    test("checks dividing one positive and one negative digits", () => {
        const result: number = calculator.calculate(-10, 2, 'divide');
        expect(result).toBe(-5);
        expect(result).toBeGreaterThan(-10);
    });

    it("checks dividing one positive and one 0", () => {
        expect(() => calculator.calculate(10, 0, 'divide')).toThrowError(Error);
    });

    afterAll(() => {
        console.log(`Тестирование закончено!`)
    });

});