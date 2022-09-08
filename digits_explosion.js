/*
explode("312")
"333122"
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
*/


function explode(s) {
    const numbers = [...s]
    let str1 = ''
    numbers.forEach(function(value) {
      str1 += value.repeat(parseInt(value))})
    return str1;
}

console.log(explode('000'));