function bestPlayer(input){

    let index = 0;
    let name = input[index];
    let topScoredGoals = Number.MIN_SAFE_INTEGER;
    let topScorrerName = "";


    for( let i = 1; i <= input.length ; i++){
        index++;
        let goalsScored = Number(input[index]);

        if (goalsScored > topScoredGoals){
            topScoredGoals = goalsScored;
            topScorrerName = name;
        }

        index++;
        name = input[index];

        if (name === "END"){
            break;
        }
    }

    if (topScoredGoals < 3){
        console.log(`${topScorrerName} is the best player!`);
        console.log(`He has scored ${topScoredGoals} goals.`);
    } else if ( topScoredGoals >= 3){
        console.log(`${topScorrerName} is the best player!`);
        console.log(`He has scored ${topScoredGoals} goals and made a hat-trick !!!`);
    }



}
bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])





