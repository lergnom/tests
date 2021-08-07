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

const findUserInDbByDimych = (id) => {
    const users = [{id: 1, name: "Anton", friend: 3}, {id: 2, name: "Masha", friend: 5}, {
        id: 3,
        name: "Kira",
        friend: 30
    },]
    return new Promise((res, rej) => {

        setTimeout(() => {
            let user = users.find(u => u.id === id)
            user !== null ? res(user) : rej('user not found')
        }, randomIntFromInterval(500, 1500))

    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// console.log(findUserInDB(88))
console.log(findUserInDbByDimych(10))