function skiTrip(input){
    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];
    let price = 0;
    let totalDays = days - 1;
    let totalPrice = 0
    switch(type){
        case "room for one person":
            price = 18;
            totalPrice = price * totalDays;
            break;
        case "apartment":
            price = 25;
            if (totalDays < 10){
                totalPrice = (price * totalDays) * 0.70;
            } else if (totalDays < 15){
                totalPrice = (price * totalDays) * 0.65;
            } else {
                totalPrice = (price * totalDays) * 0.50;
            }
            break;
        case "president apartment":
            price = 35;
            if (totalDays < 10){
                totalPrice = (price * totalDays) * 0.90;
            } else if (totalDays < 15){
                totalPrice = (price * totalDays) * 0.85;
            } else {
                totalPrice = (price * totalDays) * 0.80;
            }
            break;
        }

        if (feedback === "positive"){
            totalPrice = totalPrice * 1.25;
            console.log(totalPrice.toFixed(2));
        }else if (feedback === "negative"){
            totalPrice = totalPrice * 0.90
            console.log(totalPrice.toFixed(2));;
        }




}
skiTrip(["2",
"apartment",
"positive"])

