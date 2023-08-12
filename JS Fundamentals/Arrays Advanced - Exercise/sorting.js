function sorting(arr){
    let newArr = arr.sort((a, b) => a - b)
    let firstHalf= newArr.slice(0, (newArr.length / 2))
    let secondHalf = newArr.slice((newArr.length / 2), newArr.length).sort((a,b) => b-a)
    let result = []
    

for(let i = 0; i < arr.length/2; i++){
    result.push(secondHalf[i])
    result.push(firstHalf[i])
}
console.log(result.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);