function bombNumbers(firstArr, secondArr) {

    let bombDetonation = secondArr.shift();
    let power = secondArr.shift();
    let sum = 0;
    let bombIndex = firstArr.indexOf(bombDetonation);

    while(firstArr.includes(bombDetonation)) {
        
            let start = Math.max(0,bombIndex - power);
            let end = (power * 2) + 1
            firstArr.splice(start, end);
            bombIndex = firstArr.indexOf(bombDetonation);



        }
    

    for (let element of firstArr) {
        sum += Number(element);
    }
    return sum
}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
console.log(bombNumbers([1,1,3,4,5], [5,1]));

