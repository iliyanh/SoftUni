function tennisRanklist(input){

    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let winner = 0;
    let averagePoints = 0;
    let index = 2;

    for( let i = 1; i <= numberOfTournaments ; i++){
        let tournamentFinish = input[index];

        if (tournamentFinish === "W"){
            averagePoints += 2000;
            winner++;
        } else if (tournamentFinish === "F"){
            averagePoints += 1200;
        } else if (tournamentFinish === "SF"){
            averagePoints += 720;
        }
         index++;


    }
    let totalPoints = averagePoints + startingPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints / numberOfTournaments)}`);
    console.log(`${(winner / numberOfTournaments * 100).toFixed(2)}%`);

}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])



