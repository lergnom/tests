export const isLeapYear = (year) => {
    if (year % 4 !== 0) {
        return false
    } else {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            } else return false
        }
        return true
    }
}

// return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
