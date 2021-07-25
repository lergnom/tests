import {isLeapYear} from "./isLeapYear";

test('should detect leap years', () => {
    expect(isLeapYear(1234)).toBeFalsy()
    expect(isLeapYear(1984)).toBeTruthy()
    expect(isLeapYear(2000)).toBeTruthy()
    expect(isLeapYear(2010)).toBeFalsy()
    expect(isLeapYear(2013)).toBeFalsy()
    expect(isLeapYear(1000)).toBeFalsy()
    expect(isLeapYear(1800)).toBeFalsy()
    expect(isLeapYear(1900)).toBeFalsy()
    expect(isLeapYear(2100)).toBeFalsy()
})