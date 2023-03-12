function repainting(input){
    let plasticSheet = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let psPrice = (plasticSheet + 2) * 1.50;
    let psPaint = (paint * 1.1) * 14.50;
    let priceThinner = thinner * 5;
    let bagPrice = 0.40;

    let allPrice = psPrice + psPaint + priceThinner + bagPrice;
    let labourPerH = (allPrice * 0.3) * hours;
    let totalPrice = labourPerH + allPrice;
    
    console.log(totalPrice);

}
repainting([10, 11, 4, 8]);