function fishingBoat(input){
    let budged = Number(input[0]);
    let season = input[1];
    let fisherMan = Number(input[2]);
    let boatPrice = 0;

    switch(season){
        case "Spring":
            boatPrice = 3000;
                if (fisherMan <= 6){
                    boatPrice = boatPrice * 0.90;
                } else if (fisherMan > 6 && fisherMan <= 11){
                    boatPrice = boatPrice * 0.85;
                } else if (fisherMan > 12){
                    boatPrice = boatPrice * 0.75;
                }
            break;
        case "Summer":
            boatPrice = 4200;
                if (fisherMan <= 6){
                    boatPrice = boatPrice * 0.90;
                } else if (fisherMan > 6 && fisherMan <= 11){
                    boatPrice = boatPrice * 0.85;
                } else if (fisherMan > 12){
                    boatPrice = boatPrice * 0.75;
                }
            break;
        case "Autumn":
            boatPrice = 4200;
                if (fisherMan <= 6){
                    boatPrice = boatPrice * 0.90;
                } else if (fisherMan > 6 && fisherMan <= 11){
                    boatPrice = boatPrice * 0.85;
                } else if (fisherMan > 12){
                    boatPrice = boatPrice * 0.75;
                }
            break;
        case "Winter":
            boatPrice = 2600;
                if (fisherMan <= 6){
                    boatPrice = boatPrice * 0.90;
                } else if (fisherMan > 6 && fisherMan <= 11){
                    boatPrice = boatPrice * 0.85;
                } else if (fisherMan > 12){
                    boatPrice = boatPrice * 0.75;
                }
                break;
    }

    if (fisherMan % 2 == 0 && season != "Autumn"){
        boatPrice = boatPrice * 0.95;
    }


    if (budged >= boatPrice){
        console.log(`Yes! You have ${(budged - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budged).toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",
"Autumn",
"6"])




