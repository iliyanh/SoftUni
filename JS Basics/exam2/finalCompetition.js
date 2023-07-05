function finalCompetition(input){

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let expenses = 0;
    let prize = 0;

    if (location === "Bulgaria"){
        prize = points * dancers;

        switch(season){
            case "summer": prize = prize * 0.95; break;
            case "winter": prize = prize * 0.92; break;
        }

    } else if ( location === "Abroad"){
        prize = points * dancers * 1.50;

        switch(season){
            case "summer": prize = prize * 0.90; break;
            case "winter": prize = prize * 0.85; break;
        }
    }
    let charity = prize * 0.75;

    prize = (prize * 0.25) / dancers;


    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${prize.toFixed(2)}`);


}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])


