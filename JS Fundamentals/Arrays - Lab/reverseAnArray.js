function reverseAnArray(num, inputArray) {

    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(inputArray[i]);
    }
    let result = "";

    for (let i = array.length - 1; i >= 0; i--) {
        result += `${array[i]} `;
    }
    console.log(result);

}
reverseAnArray(3, [10, 20, 30, 40, 50]);