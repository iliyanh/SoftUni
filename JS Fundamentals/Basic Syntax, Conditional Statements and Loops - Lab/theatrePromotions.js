function theatrePromotions(day, age){
    let priceTicket = 0;

    switch (day){
        case "Weekday":
            if (0 <= age && age <= 18){
                priceTicket = 12;
            } else if (18 < age && age <= 64){
                priceTicket = 18;
            } else if (64 < age && age <= 122){
                priceTicket = 12;
            } else {
                priceTicket = "Error!"
            }
            break;
        case "Weekend":
            if (0 <= age && age <= 18){
                priceTicket = 15;
            } else if (18 < age && age <= 64){
                priceTicket = 20;
            } else if (64 < age && age <= 122){
                priceTicket = 15;
            } else {
                priceTicket = "Error!"
            }
            break;
        case "Holiday":
            if (0 <= age && age <= 18){
                priceTicket = 5;
            } else if (18 < age && age <= 64){
                priceTicket = 12;
            } else if (64 < age && age <= 122){
                priceTicket = 10;
            } else {
                priceTicket = "Error!"
            }
            break;
    }
    if (priceTicket >= 0 && priceTicket <= 122){
        console.log(`${priceTicket}$`);
    } else {
        console.log("Error!");
    }
}
theatrePromotions('Weekday', 122)