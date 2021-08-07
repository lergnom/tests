console.log("work with promis")


function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, sec)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(4000)
    console.log(3)

}

run()

const findUserInDB = (id) => {
    return new Promise((res, rej) => {
        if (id === 1) {
            res({name: 'Anton', action: 'Student'})
        } else {
            setTimeout(() => {
                rej('No that user')
            }, 5000)
        }
    })
}

console.log(findUserInDB(88))