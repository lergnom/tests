import {sum, sumInteger} from "./SumInteger";

test('Sum', () => {
    let a = 5
    let b = 4
    const result = sum(a, b)
    expect(result).toBe(9)
})

test('Example test cases', () => {
    let ex1 = '12.4'
    let ex2 = "h3ll0w0rld"
    let ex3 = "2 + 3 = "
    let ex4 = "Our company made approximately 1 million in gross revenue last quarter."
    let ex5 = "The Great Depression lasted from 1929 to 1939."
    let ex6 = "Dogs are our best friends."
    let ex7 = "C4t5 are 4m4z1ng."
    let ex8 = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"

    // expect(sumInteger(ex1)).toBe(16)
    expect(sumInteger(ex2)).toBe(3)
    expect(sumInteger(ex3)).toBe(5)
    expect(sumInteger(ex4)).toBe(1)
    expect(sumInteger(ex5)).toBe(3868)
    expect(sumInteger(ex6)).toBe(0)
    expect(sumInteger(ex7)).toBe(18)
    expect(sumInteger(ex8)).toBe(3635)
    // let = exampleTests = [
    //     ["12.4", 16],
    //     ["h3ll0w0rld", 3],
    //     ["2 + 3 = ", 5],
    //     ["Our company made approximately 1 million in gross revenue last quarter.", 1],
    //     ["The Great Depression lasted from 1929 to 1939.", 3868],
    //     ["Dogs are our best friends.", 0],
    //     ["C4t5 are 4m4z1ng.", 18],
    //     ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635]
    // ]
})