function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budged = Number(input[2]);
    let totalPrice = 0;

    switch (flower) {
        case "Roses":
            totalPrice = quantity * 5;
            if (quantity > 80) {
                totalPrice = totalPrice * 0.90;
            }
            break;
        case "Dahlias":
            totalPrice = quantity * 3.80;
            if (quantity > 90) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Tulips":
            totalPrice = quantity * 2.80;
            if (quantity > 80) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Narcissus":
            totalPrice = quantity * 3;
            if (quantity < 120) {
                totalPrice = totalPrice * 1.15;
            }
            break;
        case "Gladiolus":
            totalPrice = quantity * 2.50;
            if (quantity < 80) {
                totalPrice = totalPrice * 1.20;
            }
            break;
    }

    if (budged >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budged - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budged).toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus",
    "119",
    "360"])

