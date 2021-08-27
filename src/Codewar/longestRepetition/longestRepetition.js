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
            ? { count: acc.count, char: value }
            : acc.result;
        return acc;
    }

    const { result } = s.split('').reduce(reducer, initAcc);

    return [result.char, result.count];
}

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("abbbbb"));
console.log(longestRepetition("aabb"));
console.log(longestRepetition(""));
console.log(longestRepetition("ba"));