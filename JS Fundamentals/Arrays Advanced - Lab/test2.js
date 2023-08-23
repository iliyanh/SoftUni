function firstAndLastKNumbers(arr) {

    let elements = Number(arr.shift())
    for(let i = 0; i < elements; i++){
        let result = arr[i] + " " + arr[i + 1];
        console.log(result);
    }

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);