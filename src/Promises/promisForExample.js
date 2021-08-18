// let p = Promise.resolve(12)
// console.log(`${typeof p}  - ${p}`)
// console.log(p)
//
// p.then((v) => {
//     console.log(typeof v)
//     console.log(v)
//     return v * 2
// })
//     .then((r) => {
//         console.log(r)
//     })
//
//
// let fulfilledPr = Promise.resolve(42);
// let rejectedPr = Promise.reject("err");
// console.log(fulfilledPr);
// console.log(rejectedPr);


//Создали промис типа ответ от сервера
let prom = new Promise((res, rej) => {
    let a = 10;
    //Если необходимо передать несколько значений в резол или реджект то их перед передачей необходимо упаковать в массив или объект
    res(a)
    // rej('err')
});

console.log(prom);

//Если ответ резолв логика работы с промисом через then
prom
    .then(result => {
        console.log('then result = ', result);
        return result + 20;
    })
    .then(result2 => {
        console.log('result2 = ', result2);
    });
//для чего нужна цепочка then: 1) Для распределения какой-то логики (каждая функция в идеальном коде отвечает за что-то одно, соответственно если сложный результат можно разбить на несколько функций
//                             2) Бывает следующий запрос необходимо сделать с результатом предыдущего...


// если реджект логика через catch
prom
    .catch(err => {
        console.log('catch err = ', err)
    });


