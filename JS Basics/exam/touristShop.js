function touristShop(input){

    let budged = Number(input[0]);
    let index = 1;
    let product = input[index];
    let counter = 0;
    let productsTotalPrice = 0;

    while(product !== "Stop"){
        index++
        let currentprice = Number(input[index]);
        
        if ((counter + 1) % 3 === 0){
            currentprice = currentprice / 2;
        }

        if(currentprice <= budged){
            budged -= currentprice;
            productsTotalPrice += currentprice;
            counter++;

        } else {
            console.log("You don't have enough money!");
            console.log(`You need ${(currentprice - budged).toFixed(2)} leva!`);
            return;
        }
        index++;
        product = input[index];

    }
    console.log(`You bought ${counter} products for ${productsTotalPrice.toFixed(2)} leva.`);

}
touristShop([54,
    "Thermal underwear",
    24,
    "Sunscreen",
    45,
    ])