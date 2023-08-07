function distinctArray(arr) {
    let newArr = [];

    for(let el of arr){
        if(!newArr.includes(el)){
            newArr.push(el)
        }
    }
    return newArr.join(" ")

}
console.log(distinctArray([1, 2, 3, 4]));
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));