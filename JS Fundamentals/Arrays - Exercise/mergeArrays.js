function mergeArrays(firstArr, secondArr) {

    let newArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let currentElement = firstArr[i];
        if (i % 2 === 0) {
            currentElement = Number(currentElement) + Number(secondArr[i]);
            newArr.push(currentElement);
        } else {
            currentElement = currentElement + secondArr[i];
            newArr.push(currentElement);
        }
    }

    console.log(newArr.join(" - "));


}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);