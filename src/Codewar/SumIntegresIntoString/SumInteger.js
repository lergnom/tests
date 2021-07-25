export const sum = (a, b) => {
    return a + b
}

export const sumInteger = (str) => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) {
            sum = sum + parseInt(str[i])
        }
    }
    return sum

}
