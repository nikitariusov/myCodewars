loger = (...elem) => console.log(...elem)
let myArr = [0, 1, 2, 3, 4,]

function head(arr) {
    return arr[0]
}

function tail(arr) {
    return arr.slice(1, )
}

function init(arr){
    return arr.slice(0,-1)
}

function last(arr){
    return arr[arr.length - 1]
}

loger(head(myArr))
loger(tail(myArr))
loger(init(myArr))
loger(last(myArr))

