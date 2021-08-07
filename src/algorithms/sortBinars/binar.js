const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
const arr1 = []

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length-1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + (last - first) / 2));
        if (list[middle] === value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(10, arr))