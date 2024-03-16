function subSum(array, start, end){

    if(Array.isArray(array) === false ){
        return NaN
    }

    if(start < 0){
        start = 0
    }
    if(end > array.length - 1){
        end = array.length - 1
    }

    function sum(arr, start, end){
        let value = 0;
        for (let index = start; index <= end; index++) {
            value += Number(arr[index]);
        }
        return value
    }

    let result = sum(array, start, end)
    return result

}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 6));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 ));
console.log(subSum([10, 'twenty', 30, 40], 0, 2 ));
console.log(subSum('text', 0, 2 ));