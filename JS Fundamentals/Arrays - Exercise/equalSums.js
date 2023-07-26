function equalSums(array) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k];

        }
        if (leftSum === rightSum) {
            console.log(i);
            flag = false;
            break;
        }

    }

    if (flag) {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3]);
console.log("--------------");
equalSums([1, 2]);
console.log("--------------");
equalSums([1]);
console.log("--------------");
equalSums([1, 2, 3]);
console.log("--------------");
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

