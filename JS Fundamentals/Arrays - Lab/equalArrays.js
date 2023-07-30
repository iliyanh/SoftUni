function equalArrays(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
    }
    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i]);
    }



    let sum = 0;
    let buffer = true;
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            buffer = false;
            break;
        } else {
            sum += firstArr[i];
        }
    }

    if (buffer === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);