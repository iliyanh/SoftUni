function sumOfNumbers(input){
    let number = String(input[0]);
    let sum = 0;

    for ( let i = 0 ; i < number.length ; i++){
        let num = Number(number[i]);
        sum += num
        }
        console.log(sum);
}

sumOfNumbers(["564891"])