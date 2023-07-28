function maxSequenceofEqualElements(array) {
    let longestSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let currentSequence = [currentNumber];
        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];

            if (currentNumber === nextNumber) {
                currentSequence.push(nextNumber);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence
        }
    }
    return longestSequence.join(" ")

}
console.log(maxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(maxSequenceofEqualElements([1, 1, 1, 2, 3, 1, 3, 3]));
console.log(maxSequenceofEqualElements([4, 4, 4, 4]));
console.log(maxSequenceofEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]));