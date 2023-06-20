function cleaverLily(input){
    let age = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toys = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addedMoney = 10;

    for (let currentAge = 1 ; currentAge <= age ; currentAge++){
        if ( currentAge % 2 === 0 ){
            savedMoney += addedMoney;
            addedMoney += 10;
            stolenMoney++;
        } else {
            toys++;
        }
    }
    let totalToyPrice = toys * toyPrice;
    let totalSavedMoney = savedMoney  + totalToyPrice - stolenMoney;

    if (totalSavedMoney >= washMachinePrice){
        console.log(`Yes! ${(totalSavedMoney - washMachinePrice).toFixed(2)}`);
    } else if ( totalSavedMoney < washMachinePrice){
        console.log(`No! ${(washMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}
cleaverLily(["21",
"1570.98",
"3"])
