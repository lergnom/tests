export const highAndLow = (str) => {
    const arr = str.split(' ');
    const max = arr.reduce((a, b) => Math.max(a, b));
    const min = arr.reduce((a, b) => Math.min(a, b));
    return max + " " + min;

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));