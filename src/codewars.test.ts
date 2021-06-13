import {humanCatsDogsYears, makeNegativ} from "./codewars";

test('minus-plus', () => {
    const a: number = 42
    const result = makeNegativ(a)
    expect(result).toBe(-42)
})


test('human, cats, dogs', () => {
    expect(humanCatsDogsYears(1)).toMatchObject([1, 15, 15])
    expect(humanCatsDogsYears(2)).toMatchObject([2, 24, 24])
    expect(humanCatsDogsYears(3)).toMatchObject([3, 28, 29])
    expect(humanCatsDogsYears(4)).toMatchObject([4, 32, 34])
    expect(humanCatsDogsYears(5)).toMatchObject([5, 36, 39])
    expect(humanCatsDogsYears(6)).toMatchObject([6, 40, 44])
    expect(humanCatsDogsYears(7)).toMatchObject([7, 44, 49])
    expect(humanCatsDogsYears(8)).toMatchObject([8, 48, 54])
    expect(humanCatsDogsYears(9)).toMatchObject([9, 52, 59])
    expect(humanCatsDogsYears(10)).toMatchObject([10, 56, 64])
})