function sumOfOddNumbers(num){
    let counter = 1;
    let totalSum = 0;

    for( let i = 1 ; i <= num ; i++){
        console.log(counter);
        totalSum+=counter;
        counter+= 2
    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(5)