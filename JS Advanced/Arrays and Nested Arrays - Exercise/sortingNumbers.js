function sortingNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let output = []
    


    for (let i = 0; i < sortedArray.length / 2 ; i++) {
        let small = sortedArray[i];
        let biggest = sortedArray[sortedArray.length - 1 - i];

        output.push(small)
        if (output.length >= array.length) {
            return output
        }
        output.push(biggest)
    }

    return output;

}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,99]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]