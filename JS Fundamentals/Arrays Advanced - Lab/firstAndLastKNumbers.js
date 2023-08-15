function firstAndLastKNumbers(arr) {

    let elements = Number(arr.shift())
    let newArr = arr.slice(0, elements);
    console.log(newArr.join(" "));

    arr.shift()
    console.log(arr.join(" "));



}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);