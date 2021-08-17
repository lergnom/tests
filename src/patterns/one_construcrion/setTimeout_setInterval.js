//Предпочтительный способ
const myFunc = () => {
}
setTimeout(myFunc, 1000);

setTimeout(function () {
    myFunc()
}, 1000)