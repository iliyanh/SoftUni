function deerOfSanta(input){

    let missingDays = Number(input[0]);
    let foodLeft = Number(input[1]);
    let firstDeerFoodPerDay = Number(input[2]);
    let secondDeerFoodPerDay = Number(input[3]);
    let thirdDeerFoodPerDay = Number(input[4]);

    let totalFoodForFirstDeer = missingDays * firstDeerFoodPerDay;
    let totalFoodForSecondDeer = missingDays * secondDeerFoodPerDay;
    let totalFoodForThirdDeer = missingDays * thirdDeerFoodPerDay;

    let totalFood = totalFoodForFirstDeer + totalFoodForSecondDeer + totalFoodForThirdDeer;

    if (totalFood <= foodLeft){
        console.log(`${Math.floor(foodLeft - totalFood)} kilos of food left.`);
    } else if (totalFood > foodLeft){
        console.log(`${Math.ceil(totalFood - foodLeft)} more kilos of food are needed.`);
    }


}
deerOfSanta(["2",
"10",
"1",
"1",
"2"])
