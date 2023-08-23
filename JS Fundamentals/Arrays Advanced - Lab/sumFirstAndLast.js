function sumFirstAndLast(array) {

    let result = Number(array[0]) + Number((array.pop()));
    return result



}
console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));