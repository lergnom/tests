console.log("factorial")
const rek = (n) => {

    return n < 0 ? "n<0 - error" : n === 0 ? 1 : n !== 1 ? n * rek(n - 1) : 1

}

console.log(rek(5))
console.log(rek(0))
console.log(rek(1))
console.log(rek(-5))

console.log("%c" + '------------------', "backround: #FFFFFF; color: #FAFAFA")
console.log("POW function:")

function pow(n, i) {
    return i === 0 ? 1 : i !== 1 ? n * pow(n, i - 1) : n * i
}

console.log(pow(6, 2))

console.log("%c" + '------------------', "backround: #FFFFFF; color: #FAFAFA")
console.log("SUM salary function:")


let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


let sites = [{
    name: 'Peter',
    salary: 2000
}, {
    name: 'Alex',
    salary: 1800
}]

function sumSalary(department) {

    if (Array.isArray(department)) {
        return department.reduce((acc, el) => acc + el.salary, 0)
    } else {
        let sum = 0

        for (let subdep of Object.values(department)) {
            sum = sum + sumSalary(subdep)
        }
        return sum
    }
}

console.log(sumSalary(sites))
console.log(sumSalary(company))
console.log(Object.values(sites))


// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//
// С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.


function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

function sumToRek(n) {
    return n !== 1 ? n + sumToRek(n - 1) : 1
}

function sumtoProgr(n) {
    return (n*(n+1))/2
}


console.log(sumTo(100))
console.log(sumToRek(100))
console.log(sumtoProgr(100))
