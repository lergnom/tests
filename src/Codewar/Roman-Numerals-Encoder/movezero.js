var moveZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }

    }
    return arr

}

console.log(moveZeros([1, 2, 9, 0, 1, 0, 9, 1, 0, 3, 0, 1]))

const fact = (n) => {
    let f = 1;
    if (n === 0) {
      return 1
    }
    for (let i = 0; i < n - 1; i++) {
        f = n * (n - 1)
    }
    return f
}

fact(0)
fact(1)
fact(2)
fact(3)