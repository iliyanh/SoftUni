function extractIncreasingNumber(array) {

    let output = []    
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i<array.length;i++){
        let currentElement = array[i];
        
        if(currentElement >= biggestNumber){
            biggestNumber = currentElement;
            output.push(biggestNumber);
        }
    }
    return output

   
}
extractIncreasingNumber([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingNumber([1, 2, 3, 4]);
extractIncreasingNumber([20, 3, 2, 15, 6, 1]);