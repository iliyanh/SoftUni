function pool(input){

    let people = Number(input[0]);
    let entrancePrice = Number(input[1]);
    let bed = Number(input[2]);
    let umbrella = Number(input[3]);


    let totalEntrancePrice = people * entrancePrice;
    let totalUmbrelaPrice = Math.ceil(people * 0.50);
    let totalPriceForBeds = Math.ceil(people * 0.75);
    
    let totalPrice = totalEntrancePrice + (totalUmbrelaPrice * umbrella) + (totalPriceForBeds * bed);
    console.log(`${totalPrice.toFixed(2)} lv.`);


}
pool([100,
    8,
    6,
    4,
    
    ])