function negativeOrPositiveNumber(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("\n")



}
console.log(negativeOrPositiveNumber(['7', '-2', '8', '9']));
console.log(negativeOrPositiveNumber(['3', '-2', '0', '-1']));