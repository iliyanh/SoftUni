function sumPrimeNonPrime(input){

    let index = 0;
    let num = input[index];
    let primeNumbers = 0;
    let nonPrimeNumbers = 0;


    while(num !== "stop"){
         num = Number(num);
            if( num < 0){
                console.log("Number is negative.");
                index++;
                num = input[index];
                continue;
            }
         let isPrime = true;
        for(let i = 2 ; i < num ; i++ ){
            if (num % i === 0){
                nonPrimeNumbers += num;
                isPrime = false;
                    break;
            }
        }
        if (isPrime){
            primeNumbers += num;
        }
        index++;
        num = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);

}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])




