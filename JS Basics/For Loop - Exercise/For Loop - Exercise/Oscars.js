function oscars(input){

    let nomeniee = input[0];
    let academyPoints = Number(input[1]);
    let juryNumbers = Number(input[2]);
    let juryNamePoints = 0;
    let finalPoints = academyPoints;
    let juryCounter = 0;


    for (let i = 3; i <= input.length; i+=2) {
        juryCounter++;
        let juryName = input[i];
        juryNamePoints = juryName.length;
        let juryPoints = Number(input[i + 1]);

        let totalPoints =((juryNamePoints * juryPoints)/2);
        finalPoints += totalPoints;

        if (finalPoints > 1250.5){
            break;
        }
        if (juryCounter >= juryNumbers){
            break;
        }
    
    }
    if (finalPoints >= 1250.5){
        console.log(`Congratulations, ${nomeniee} got a nominee for leading role with ${(finalPoints).toFixed(1)}!`);
    } else if( finalPoints < 1250.5) {
        console.log(`Sorry, ${nomeniee} you need ${(1250.5 - finalPoints).toFixed(1)} more!`);
    
    }



    

}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



