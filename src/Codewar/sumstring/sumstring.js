const sumString = (a, b) => {
    // eslint-disable-next-line no-undef
    let c = BigInt(a)
    // eslint-disable-next-line no-undef
    let d = BigInt(b)
    return (c + d).toLocaleString().split(",").join("")

}

console.log(sumString('123', '456'))
console.log(sumString('712569312664357328695151392', '8100824045303269669937'))
