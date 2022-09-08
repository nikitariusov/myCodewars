/*
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) 
*/

const isogram = 'Dermatoglyphics'
const notIsogram = 'moOse'

function isIsogram(str) {
    
    let allLetter = []
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase()
        if (allLetter.includes(letter)) {
            return false
        } else {
            allLetter.push(letter)
        }
    }
    return true
}

console.log(isIsogram(notIsogram));