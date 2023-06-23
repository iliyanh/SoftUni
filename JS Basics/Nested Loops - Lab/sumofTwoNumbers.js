function sumOfTwoNumbers(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCount = 0;
    let result = 0;

    for(let i = start ; i <= end; i++){
        for(let j = start; j <= end; j++){
            result = i + j;
            combinationCount++;

            if (result === magicNumber){
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (result === magicNumber){
            break;
        }
    }
    if (result !== magicNumber){
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
        
    }


}
sumOfTwoNumbers(["88","888","2000"]);
