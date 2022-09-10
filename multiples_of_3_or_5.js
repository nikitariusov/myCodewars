loger = (...elem) => console.log(...elem)

function solution(number){
    let sum = 0
    for (let num = 0; num < number; num++){
        //loger('num: '+ num)
        if (num >= 0 && (num % 5 === 0 || num % 3 === 0)){
            //loger('попали в условие num: '+ num)
            sum = sum + num
            //loger('sum: ' + sum)
        } else if (number < 0) {
            //loger('He попали в условие')
            return 0
        }
    }
    return sum
}

loger(solution(20))