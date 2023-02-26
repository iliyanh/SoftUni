function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPrices = Number(input[2]);

    let background = budget * 0.10;
    if (extras > 150){
        extras = extras - (extras * 0.10);
    }

    let totalPFClothes = clothesPrices * extras;
    let totalExpenses = background + totalPFClothes;
    let diff = Math.abs(budget - totalExpenses);

    if (totalExpenses > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else if(totalExpenses <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)

    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])




