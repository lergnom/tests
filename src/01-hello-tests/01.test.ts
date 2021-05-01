import {sum, mult, splitIntoWords} from "./01";

test('sumd be correct', () => {
    //data
    const a = 1
    const b = 2
    const c = 3
    //action
    const result = sum(a, b)
    const result1 = sum(a,c)
    //expect result
    expect(result).toBe(3)
    expect(result1).toBe(4)
})

test('mult be correct', () => {
    //data
    const a = 1
    const b = 2
    const c = 3
    //action
    const result = mult(a, b)
    const result1 = mult(a,c)
    //expect result
    expect(result).toBe(2)
    expect(result1).toBe(3)
})

test('split vould be correct', () => {
    //data
    const str1 = "Hello my friend"
    const str2 = "JS - the best programing language"
    //action
    const result = splitIntoWords(str1)
    const result1 = splitIntoWords(str2)
    // const result1 = splitIntoWords(str2)
    //expect result
    expect(result.length).toBe(3 )
    expect(result[0]).toBe("hello" )
    expect(result[1]).toBe("my" )
    expect(result[2]).toBe("friend" )

    expect(result1.length).toBe(5)
    expect(result1[0]).toBe("js")
    expect(result1[1]).toBe("the")
    expect(result1[2]).toBe("best")
    expect(result1[3]).toBe("programing")
    expect(result1[4]).toBe("language")

})