

function tickets(peopleInLine) {
    let price = 25
    let countQuarter = 0
    let countFifty = 0
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === price) {
            countQuarter++
        } else if (peopleInLine[i] === 50) {
            countQuarter--;
            if (countQuarter < 0) {
                return 'NO'
            }
            countFifty++
        } else if (peopleInLine[i] === 100) {
            if (countFifty === 0) {
                countQuarter -= 3
            } else {
                countQuarter--
                countFifty--
            }
            if (countQuarter < 0 || countFifty < 0) {
                return 'NO'
            }

        }
    }
    return 'YES'
}


console.log(tickets([25, 25, 50, 50]))
console.log(tickets([25, 100]))
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100]))