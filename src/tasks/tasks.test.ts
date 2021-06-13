import {calc, getCopyStudent, sum} from "./tasks";
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


test("students", () => {
    const student = {
        name: 'Bob',
        age: 23,
        isMar: true,
        friends: ['Mike', 'Fred']
    }


    const copyStudent = getCopyStudent(student)
    expect(copyStudent === student).toBe(false)
    expect(copyStudent.name === student.name).toBe(true)
    expect(copyStudent.age === student.age).toBe(true)
    expect(copyStudent.friends[0] === student.friends[0]).toBe(true)
    expect(copyStudent.friends === student.friends).not.toBe(false)

})