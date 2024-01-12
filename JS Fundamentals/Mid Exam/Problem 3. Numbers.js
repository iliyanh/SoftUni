function numbers(input){
    let newArr = input.split(" ").map(Number)
    let sum = 0;
    let arr = [];
for( let el of newArr){
    sum += el
}

let avg = sum / (newArr.length)

for(let element of newArr){
    if (element > avg){
        arr.push(element)
        
    }
}
if(arr.length === 0){
    return "No"
}
arr.sort((a, b) => b - a)
let sliced = arr.slice(0, 5)
return sliced.join(" ")


}
console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(numbers('1'));
console.log(numbers('-1 -2 -3 -4 -5 -6'));