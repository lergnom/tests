const man = {
    head: 1,
    legs: 2,
    hand: 2
};
let i
//где-то в сценарии к объектам prototype доваляется метод
if (typeof Object.prototype.clone === 'undefined') {
    Object.prototype.clone = function () {
    };
}


for (i in man) {
    //При обходе циклом необходимо произвести фильтрацию от возможных методов prototype
    if (man.hasOwnProperty(i)) {
        //выполняемый код с фильтрацией
    }

}


//_________________________________________________________________________
let j, hasOwn = Object.prototype.hasOwnProperty;
for (j in man) {
    if (hasOwn.call(man, i)) {
        //выполняемый код с фильтрацией
    }

}
