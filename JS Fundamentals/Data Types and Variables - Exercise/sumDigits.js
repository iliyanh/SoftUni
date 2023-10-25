function sumDigits(num){
    let sum = 0;
    let numToString = num + "";

    for(let i = numToString.length - 1; i >= 0; i--){
        sum += Number(numToString[i]);
    }
    console.log(sum);


}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);