
const permutations = (string) => {
    if (!!string.length && string.length < 2 ){
        return [string]
    }
    let permutationsArr = [];
    for (let i = 0; i < string.length; i++){
        let char = string[i]
        if (string.indexOf(char) != i) {
            continue;
        }
        let remainder = string.slice(0, i) + string.slice(i + 1, string.length);
        for (let permutation of permutations(remainder)){
            permutationsArr.push(char + permutation)
        }
    }
    return permutationsArr;
}

function permutationsReduce(str) {
    return (str.length <= 1) ? [str] :
        Array.from(new Set(
            str.split('')
                .map((char, i) => permutationsReduce(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                .reduce((r, x) => r.concat(x), [])
        ));
}


console.log(permutations('ab'))
console.log(permutations('a'))
console.log(permutations('aabb'))