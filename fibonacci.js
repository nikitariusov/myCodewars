loger = (...elem) => console.log(...elem)

function fibonacci(n){
    let arr = [0,1,]
    while(arr.length < n){
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    return arr[n-1]
}

loger(fibonacci(5))