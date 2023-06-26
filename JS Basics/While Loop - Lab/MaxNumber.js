function maxNumber(input){
    let index = 0;
    let number = input[0];
    let max = Number.MIN_SAFE_INTEGER;

    while(number !== "Stop"){
        let num = Number(number);
        if (num > max){
            max = num;
        }
        index++;
        number = input[index];
    }
    console.log(max);



}
maxNumber(["-10",
"20",
"-30",
"Stop"])

