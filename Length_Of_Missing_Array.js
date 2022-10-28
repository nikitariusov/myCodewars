function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays !== null && arrayOfArrays.length > 1) {
        let arrLength = arrayOfArrays.map((elem) => {
            if (elem !== null) {
                return elem.length}
            }).sort(function(a, b) {
                return a - b})
        if (arrLength.length === 0) {
            return 0
        } else {
            if (arrLength[0] === 0) {
                return 0
            } else {
                for (let i = 0; i < arrLength[arrLength.length - 1]; i++) {
                    if ((arrLength[i] + 1) !== arrLength[i+1]) {
                        return (arrLength[i] + 1)
                    }
                }
            }
    }
    } else {
        return 0
    }
}

  let arr = [ [], [ 1, 2, 2 ] ]
  [ [ 1, 2, 2 ], null ]
  console.log(getLengthOfMissingArray(arr));