function yardgreen(input){
    let squareArea = Number(input[0]);
    
    let pricePerArea = squareArea * 7.61;

    let discount = pricePerArea * 0.18;

    let finalSum = pricePerArea - discount;
    let sumWithoutD = finalSum + discount;
    let finalSumVat = finalSum * 1.20;
    let sumvat = finalSum * 0.2;

    console.log(`The price is ${sumWithoutD} lv. `)
    console.log(`The discount is: ${discount} lv.`)
    console.log(`The  price after discount is: ${finalSum} lv. `);
    console.log(`VAT: ${sumvat} lv.`)
    console.log(`The final price + VAT is: ${finalSumVat} lv.`)

}
yardgreen([1000])