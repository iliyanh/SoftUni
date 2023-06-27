function   minNumber(input){
    let index = 0;
    let number = input[0];
    let max = Number.MAX_SAFE_INTEGER;

    while(number !== "Stop"){
        let currentNumber = Number(input[index]);
        if (currentNumber < max){
            max = currentNumber;
        }
        index++;
        number = input[index];
    }
    console.log(max);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
