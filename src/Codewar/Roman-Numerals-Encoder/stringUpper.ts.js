function solution(string) {
    let arr=string.split("")
    let newArr=[]

    arr.forEach( str => {
        if (str === str.toUpperCase()){
           newArr.push(" ")

        }
        newArr.push(str)
    })

    return newArr.join("").split(",").join()
}

solution('camelCasing')
solution('camelCasingTest')