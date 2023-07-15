function division(number){

    let division = "";

    if(number % 10 === 0){
        division = 10;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 7 === 0){
        division = 7;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 6 === 0){
        division = 6;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 3 === 0){
        division = 3;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 2 === 0){
        division = 2;
        console.log(`The number is divisible by ${division}`);
    } else {
        console.log("Not divisible");
    }
    

}
division(30)
division(15)
division(12)
division(1643)