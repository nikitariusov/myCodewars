function numberOfPairs(gloves) {
    let pairsNum = {}
    let numberOfPairs = 0
    gloves.forEach(element => {
        pairsNum[element] = pairsNum[element] ? pairsNum[element] + 1 : 1
    });
    console.log(pairsNum);

    for (let key in pairsNum) {
        numberOfPairs += Math.floor(pairsNum[key]/2)
    }
    return numberOfPairs;
}


let gloves = ['red','red']

numberOfPairs(gloves)