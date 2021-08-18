let prom = new Promise((res, rej) => {
    let a = 10;
    res(a)
    // rej('error')
});

prom
    .then(result => {
        console.log('result', result)
    })
    .catch(error => {
        console.log('error', error)
    })
    .finally(
        console.log('finaly')
        //никак не взаимодействует с данными нужен для выполнения мутирующих действий глобального состояния... например в прогресс баре использовать в UI
    )


//Мгновенно за резолвленный промисс и заредж
Promise.resolve(10)
Promise.reject(0)

//Для работы с коллеккциями промиссов
Promise.all([p1, p2, p3])
    //дожидается когда все зарезолвится
    .then([]).catch()

Promise.allSettled([p1, p2, p3]).then([]) //возвращает результаты всех
Promise.race([p1, p2, p3]) //самый первый придет тот ответ и получится
