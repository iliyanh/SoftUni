function magicSum(array, num) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        for (let j = i + 1; j <= array.length; j++) {
            let nextNumber = array[j];

            if (currentNumber + nextNumber === num) {
                newArr.push(currentNumber, nextNumber);
                
            }
        }
    }

    for( let k = 0; k < newArr.length ; k+=2){
        let firstNum = newArr[k];
        let secondNum = newArr[k+1];
        console.log(firstNum , secondNum);
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);