function familyHoliday(input){

    let budged = Number(input[0]);
    let days = Number(input[1]);
    let pricePerDay = Number(input[2]);
    let extraExpences = Number(input[3]);


    if (days > 7){
        pricePerDay = pricePerDay * 0.95;
    }

    let priceWithExpences = budged * extraExpences / 100;
    let totalPriceForAllDays = (days * pricePerDay) + priceWithExpences;

    if (totalPriceForAllDays <= budged ){
        console.log(`Ivanovi will be left with ${(budged - totalPriceForAllDays).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalPriceForAllDays - budged).toFixed(2)} leva needed.`);
    }


}
familyHoliday(["500",
"7",
"66",
"15"])