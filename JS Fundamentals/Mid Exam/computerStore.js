function computerStore(input) {
    let command = input.shift();
    let priceWhithOutTaxes = 0
    let taxes = 0;
    let totalPrice = 0;
    let price = 0;

    while (command !== "special") {
        if (command == "regular") {
            break;
        }
        price = Number(command)
        if (price <= 0) {
            console.log("Invalid price!");
            command = input.shift();
            continue
        }
        
        priceWhithOutTaxes += price;
        
        command = input.shift();


    }

    if (priceWhithOutTaxes === 0) {
        return "Invalid order!"
    } else {
        taxes = priceWhithOutTaxes * 0.20;
        totalPrice = priceWhithOutTaxes * 1.20;
        if (command === "special") {
            totalPrice = totalPrice * 0.90;
        }
        
        return "Congratulations you've just bought a new computer!\n" +
            `Price without taxes: ${priceWhithOutTaxes.toFixed(2)}$\n` +
            `Taxes: ${taxes.toFixed(2)}$\n` +
            "-----------\n" +
            `Total price: ${totalPrice.toFixed(2)}$`
        
        


    }
}
    console.log(computerStore((['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])));
    console.log(computerStore(([
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
    ])
    ));
    console.log(computerStore(([
        'regular'
    ])
    ));