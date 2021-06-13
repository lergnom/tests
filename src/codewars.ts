export function makeNegativ(num: number) {
    return num > 0 ? -num : num
}

export function humanCatsDogsYears(years: number) {
    if (years === 1) {
        return [1, 15, 15]
    }
    if (years === 2) {
        return [2, 24, 24]
    }
    if (years > 2) {
        return [years, 24 + ((years - 2) * 4), 24 + ((years - 2) * 5)]
    }
}