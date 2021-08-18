//Создали промис типа ответ от сервера


let prom = new Promise((res, rej) => {
    let a = 10;
    res(a)
    // rej('error')
});

const sum =(a)=> {
    console.log(a + 100)
}


prom.
then( sum)
.catch(console.log)



setTimeout(sum,1000,'Hi')

