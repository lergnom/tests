export const lastSurvivor = (letters, coords) => {
    let str = letters.split('')
    for (let i = 0; i < coords.length; i++) {
        console.log(str)
        str.splice(coords[i], 1)
    }
    return str.join('')
}
//
// function lastSurvivor(string, indices) {
//     const arr = [...string];
//     for (const i of indices) arr.splice(i, 1)
//     return arr[0];
// }


// function lastSurvivor(letters, coords) {
//     return coords.reduce((letters, coord) => letters.slice(0, coord) + letters.slice(coord + 1), letters);
// }
//
// function lastSurvivor(letters, coords) {
//     for (let c of coords)
//         letters = letters.substr(0, c) + letters.substr(c+1);
//     return letters;
// }

console.log(lastSurvivor('kbc', [0, 1]))