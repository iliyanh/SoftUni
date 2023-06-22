function numbersDividedBy9(input){
    let firstN = Number(input[0]);
    let secondN = Number(input[1]);
    let sum = 0;

    for ( let i = firstN ; i <= secondN ; i++ ){
        if (i % 9 == 0){
            sum += i
        }
    }
    console.log("The sum: " + sum);
    for ( let i = firstN ; i <= secondN ; i++ ){
        if (i % 9 == 0){
            console.log(i);
        }
    }
}
numbersDividedBy9(["100", "200"])