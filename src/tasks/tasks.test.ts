import {calc, sum} from "./tasks";
import {action} from "@storybook/addon-actions";

test('sum a b', () => {
    const a: number = 5
    const b: number = 10

    const result = sum(a, b)

    expect(result).toBe(15)
})


test('calculator', () => {
    const a: number = 10;
    const b: number = 2;

    expect(calc(a, b, {type: 'sum'})).toBe(12)
    expect(calc(a, b, {type: 'sub'})).toBe(8)
    expect(calc(a, b, {type: 'div'})).toBe(5)
    expect(calc(a, b, {type: 'mult'})).toBe(20)
})