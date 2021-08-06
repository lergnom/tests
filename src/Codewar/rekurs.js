console.log("factorial")
const rek = (n) => {

    return n < 0 ? "n<0 - error" : n === 0 ? 1 : n !== 1 ? n * rek(n - 1) : 1

}

console.log(rek(5))
console.log(rek(0))
console.log(rek(1))
console.log(rek(-5))

