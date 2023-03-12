function foodDelivery(input){
    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let veggie = Number(input[2]);

    let chikenPrice = chiken * 10.35;
    let fishPrice = fish * 12.40;
    let veggiePrice = veggie * 8.15;

    let menuPrice = chikenPrice + fishPrice + veggiePrice;
    let desert = menuPrice * 0.20;

    let totalPrice = menuPrice + desert + 2.50;

    console.log(totalPrice)
}
foodDelivery([2, 4, 3])