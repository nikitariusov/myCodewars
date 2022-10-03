print = (...elem) => console.log(...elem)

function deepCount(a){
    let arrayLength = 0
    a.forEach(element => {
        if(typeof element === 'object') {
            arrayLength += 1
            arrayLength += deepCount(element)
        } else {
            arrayLength += 1
        }
    });
    return arrayLength
}


let arr1 = [1, 2, 3]

console.log(deepCount(arr1));