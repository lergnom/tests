// function stockList(listOfArt, listOfCat) {
//
// }


const l = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const m = ["A", "B", "C", "W"];

const count = m.reduce((o, key) => {
    const c = l.reduce((total, item) => {
        const [code, nr] = item.split(" ");
        return total + parseInt(code.indexOf(key) === 0 ? nr : 0, 10);
    }, 0);
    return { ...o, [key]: c };
}, {});

const printResult = obj => {
    return Object.keys(obj)
        .map(k => `(${k} : ${obj[k]})`)
        .join(" - ");
};

console.log(printResult(count));