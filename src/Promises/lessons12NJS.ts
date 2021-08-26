const lesson12NJS = () => {
    console.log("Native JS - lesson 12")


// / Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
    let promise = new Promise((resolve => {
        console.log("Promise is created")
    }))
    console.log('Task 01: ', promise)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

    let promise2 = Promise.resolve("Promise data").then(res => console.log(res));
    //     console.log('Promise data')
    // )
    console.log("Task 02: ", promise2)
// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

    let promise3 = Promise.reject("Promise Error")
    console.log("Task 03: ", promise3)


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

    let promise4 = new Promise((res, rej) => {
        setTimeout(() => {
            res("Promise Data")
        }, 3000)
    }).then(res => {
        console.log(res)
    })

    console.log("Task 04: ", promise4)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

    type testObjType = {
        promise: null | Promise<any>;
        resolve: null | Function;
        reject: null | Function;
        onSuccess: (paramName: string) => void;
        onError: (paramName: string) => void;
    }

    const handlePromise: testObjType = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => (console.log(`Promise is resolved with data: ${paramName}`)),
        onError: (paramName: string) => (console.log(`Promise is rejected with error: ${paramName}`)),
    }

    const createPromise = () => {

        const somePromise: Promise<any> = new Promise((res, rej) => {
            handlePromise.resolve = res;
            handlePromise.reject = rej;
        });

        handlePromise.promise = somePromise;

        handlePromise.promise
            .then(res => handlePromise.onSuccess(res))
            //.then(handlePromise.onSuccess)
            .catch(err => handlePromise.onError(err))
        //.catch(handlePromise.onError)
        //@ts-ignore
        window.prom = handlePromise;
    }
    const resolvePromise = () => {
        handlePromise.resolve && handlePromise.resolve('1');

    }
    const rejectPromise = () => {
        handlePromise.reject && handlePromise.reject('0');

    }


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

    const promise6 = new Promise((res, rej) => {
        setTimeout(() => {
            res("My name is");
        }, 1000)
    });

    const onSuccess = (param: string) => {
        return param + " Anton";
    }

    const print = (param: string) => {
        console.log(param)
    }

    // promise6
    // .then(res => {
    //     //@ts-ignore
    //     return onSuccess(res)
    // })
    // .then(res => {
    //     print(res);
    // })

    promise6
        //@ts-ignore
        .then(onSuccess)
        .then(print)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
    const promise7_1 = new Promise((res, rej) => {
        setInterval(() => {
            res({name: "Anna"});
        }, 2000)
    });

    const promise7_2 = new Promise((res, rej) => {
        setInterval(() => {
            res({age: 16});
        }, 3000)
    });

    const promise7_3 = new Promise((res, rej) => {
        setInterval(() => {
            res({city: 'Pskov'});
        }, 4000)
    });

    // promise7_1.then(console.log)
    // promise7_2.then(console.log)
    // promise7_3.then(console.log)

    const allPromise = Promise.allSettled([promise7_1, promise7_2, promise7_3])

    allPromise.then((result) => {
            //@ts-ignore
            let myObj = {}
            result.forEach(pr => {
                //@ts-ignore
                // console.log(Object.values(pr.value)[0])
                //@ts-ignore
                myObj[Object.keys(pr.value)] = Object.values(pr.value)[0];
            })
            console.log("MyObj", myObj)
            //@ts-ignore
            // console.log(result[0].value.name);
            //@ts-ignore
            const name = result[0].value.name;
            //@ts-ignore
            // console.log(result[1].value.age);
            //@ts-ignore
            const age = result[1].value.age;
            //@ts-ignore
            // console.log(result[2].value.city);
            //@ts-ignore
            const city = result[2].value.city;
            //@ts-ignore
            return {name, age, city}
        }
    )
        .then(console.log)


}

export default lesson12NJS