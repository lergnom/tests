function longestRepetition(s) {
    const initAcc = {
        result: {
            char: '',
            count: 0
        }
    }

    const reducer = (acc, value) => {
        acc.count = acc.last === value
            ? acc.count + 1
            : 1;
        acc.last = value;
        acc.result = acc.count > acc.result.count
            ? {count: acc.count, char: value}
            : acc.result;
        return acc;
    }

    const {result} = s.split('').reduce(reducer, initAcc);

    return [result.char, result.count];
}

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("abbbbb"));
console.log(longestRepetition("aabb"));
console.log(longestRepetition(""));
console.log(longestRepetition("ba"));


// const longestRepetition = s => {
//     let max = 0;
//     let char = '';
//     for (let i = 1, l = s.length, c = 1; i <= l; i++) {
//         if (s[i] === s[i - 1]) c++;
//         else {
//             if (c > max) {
//                 max = c;
//                 char = s[i - 1];
//             }
//             c = 1;
//         }
//     }
//     return [char, max];
// }


// const longestRepetition = s => (s.match(/(.)(\1*)/g) || []).reduce((a,e) => e.length > a[1] ? [e[0],e.length] : a,['',0]);