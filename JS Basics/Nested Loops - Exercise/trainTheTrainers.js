function trainTheTrainers(input){

    let jury = Number(input[0]);
    let name = "";
    let grades = 0;
    let index = 1;
    let command = input[index];
    let counter = 0;
    let allgrades = 0;

    while (command !== "Finish"){
        name = command
        for( let i = 1 ; i <= jury ; i++){
            counter++;
            index++;
            let currentGrade = Number(input[index]);
            grades += currentGrade;
            allgrades += currentGrade; 
        }    
        let averageGrade = grades / jury;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);
        grades = 0;
        index++;
        command = input[index]


    }
    let tempallgrades = allgrades / counter ;
    console.log(`Student's final assessment is ${tempallgrades.toFixed(2)}.`);


}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


