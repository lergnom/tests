//Создали промис типа ответ от сервера

let prom = new Promise((res, rej) => {
    let a = 10;
    //Если необходимо передать несколько значений в резол или реджект то их перед передачей необходимо упаковать в массив или объект
    // res(a)
    rej('error')
});
console.log(prom);

// prom
//     .then((result) => {
//         console.log('result = ', result);
//         return result + 20;
//     }, rej => {
//         console.log('reject = ', rej)
//         // throw  "error";
//         return 100
//     })
//     .then((result2) => {
//         console.log('result2 = ', result2);
//         return result2 + 20;
//     }, rej2 => {
//         console.log('reject = ', rej2)
//     })
//     .then((result3) => {
//         console.log('result3 = ', result3);
//     }, rej2 => {
//         console.log('reject = ', rej2)
//     })


//Описывать результат потом ошибку
// prom.then((result) => {
//     console.log('result = ', result);
//     return result + 20;
// })
//     .then(null, rej => {
//         console.log('reject = ', rej)
//         // throw  "error";
//         return 100
//     })


//Такой подход необходим что бы четко знать на каком этапе случилось ошибка что мы можем сделать чтоб ее исправить огромная сложная цепочка для сложной логики
prom
    .then((result) => {
        console.log('result = ', result);
        return result + 20;
    })
    .catch(err => {
        console.log('catch1 ', err)
        return 50
    })
    .then((result2) => {
        console.log('result3 = ', result2);
        throw 'err'
    })
    .catch(err2 => {
        console.log('catch2 ', err2)
    })
    .catch(err3 => {
        console.log('catch3 ', err3)
    })
// .then(null, err => {
//
// })


// обычно ошибку необходимо перехватить в конце, тогда идут цепочки then а в конце catch
