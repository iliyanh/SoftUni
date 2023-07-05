function christmasPreparation(input){

    let paperRolls = Number(input[0]);
    let leatherRolls = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);


    let priceForPaperRolls = paperRolls * 5.80;
    let priceForLeatherRolls = leatherRolls * 7.20;
    let priceForGlue = glue * 1.20;

    let priceForAllMats = priceForPaperRolls + priceForLeatherRolls + priceForGlue;

    let totalPrice = priceForAllMats - (priceForAllMats * discount / 100);

    console.log(totalPrice.toFixed(3));


}
christmasPreparation([7, 8, 0.5, 45])
