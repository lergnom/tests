let p = Promise.resolve(12)
console.log(`${typeof p}  - ${p}`)
console.log(p)

p.then((v) => {
    console.log(typeof v)
    console.log(v)
    return v * 2
})
    .then((r) => {
        console.log(r)
    })


