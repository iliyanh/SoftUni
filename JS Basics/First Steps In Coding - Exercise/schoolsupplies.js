function schoolMats(input){
    let pens = Number(input[0]);
    let markers = input[1];
    let washLiquid = input[2];
    let discount = input[3];

    let pricePens = pens * 5.80 ;
    let priceMarkers = markers * 7.20 ;
    let priceWL = washLiquid * 1.20 ;
    let discountToP = discount / 100;

    let priceAllMats = pricePens + priceMarkers + priceWL;
    let result = priceAllMats - (priceAllMats * discountToP);
    console.log(result);
}
schoolMats([2, 3, 4, 25]);