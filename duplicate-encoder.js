loger = (...elem) => console.log(...elem)
let word = "Success"

function decode(word) {
    word = word.toLowerCase()
    let decodeString = ''
    let letters = word.split('')
    loger(letters)
    for (let i = 0; i < word.length; i++){
        let letter = word[i]
        let letterCount = word.split(letter).length - 1
        loger(`Буква -${letter}: ${letterCount}.`)
        decodeString += letterCount > 1? ')' : '('
        loger(decodeString)
    }
    return decodeString
}
loger(decode(word));