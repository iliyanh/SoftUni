function condenseArrayToNumber(arr) {

    let currentArray = arr;

    while (currentArray.length > 1) {
        let newArr = [];

        for (let i = 0; i < currentArray.length - 1; i++) {
            let firstNum = currentArray[i];
            let secondNum = currentArray[i + 1];

            newArr.push(firstNum + secondNum);
        }
        currentArray = newArr;

    }
    console.log(Number(currentArray));


}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);