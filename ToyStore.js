function toyStore(input){
    let holiday = Number(input[0]);
    let puzzles = Number(input[1]);
    let doll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = puzzles * 2.60 + doll * 3 + teddyBear * 4.10 +
    minions * 8.20 + trucks * 2;
    let totalToys = puzzles + doll + teddyBear + minions + trucks;

    if (totalToys >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }
    let rent = totalPrice * 0.10;
    let priceAfterRent = totalPrice - rent;
    let diff = Math.abs(priceAfterRent - holiday);

    if (priceAfterRent >= holiday){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else if (priceAfterRent <= holiday) {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

    
}
toyStore(["40.8",
"20",
"25",
"30",
"50",
"10"])

