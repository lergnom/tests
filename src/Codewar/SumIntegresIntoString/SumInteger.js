export const sum = (a, b) => {
    return a + b
}

export const sumInteger = (str) => {
    let sum = 0
    let arr = str.match(/\d+/g)
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i])
        }
    }
    return sum
}
//
//
// function sumOfIntegersInString(s) {
//     return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
// }
//
// function sumOfIntegersInString(s){
//     return s.replace(/\D/gi,' ')
//         .split(" ")
//         .map(value=>Number(value))
//         .reduce((a,b)=>a+b);
// }
//
//
// function sumOfIntegersInString(s){
//     const numbers = '1234567890'
//     let res = ''
//     let sum = 0
//     for (let i = 0; i <= s.length; i += 1) {
//         if (numbers.includes(s[i])) {
//             res += s[i]
//         }
//         else {
//             if (res !== '') {
//                 sum = sum + parseInt(res)
//                 res = ''
//             }
//         }
//     }
//     return sum
// }