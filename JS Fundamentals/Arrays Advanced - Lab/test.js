function firstAndLastKNumbers(arr) {

    let elements = Number(arr.shift())
    let firstArr = slice(0, elements, arr);
    let secondArr = arr.slice(-elements)
    console.log(firstArr.join(" "));
    console.log(secondArr.join(" "));

    function slice(start , end, arr){
        let b = arr;
        let a = b.slice(start, end)
        return a
    }


}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);