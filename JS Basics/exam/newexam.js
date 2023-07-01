function newExam(input){

    let name = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;
    let vipDiscount = 0;
    let price = 0;

    if(name === "Bansko" || name === "Borovets"){
        switch(package){
            case "noEquipment":
                pricePerDay = 80;
                vipDiscount = 0.95;
                price = days * pricePerDay;
                if (vip === "yes"){
                    price = price * vipDiscount;
                }
                if (days > 7){
                    price = price - pricePerDay;
                }
                if (days < 1){
                    console.log("Days must be positive number!");
                } else {
                console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                }
                break;
            case "withEquipment":
                pricePerDay = 100;
                vipDiscount = 0.90;
                price = days * pricePerDay;
                if (vip === "yes"){
                    price = price * vipDiscount;
                }
                if (days > 7){
                    price = price - pricePerDay;
                }
                if (days < 1){
                    console.log("Days must be positive number!");
                } else {
                console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                }
                break;
        }

    }else if (name === "Varna" || name === "Burgas"){
        switch(package){
            case "noBreakfast":
                pricePerDay = 100;
                vipDiscount = 0.93;
                price = days * pricePerDay;
                if (vip === "yes"){
                    price = price * vipDiscount;
                }
                if (days > 7){
                    price = price - pricePerDay;
                }
                if (days < 1){
                    console.log("Days must be positive number!");
                } else {
                console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                }
                break;
            case "withBreakfast":
                pricePerDay = 130;
                vipDiscount = 0.88;
                price = days * pricePerDay;
                if (vip === "yes"){
                    price = price * vipDiscount;
                }
                if (days > 7){
                    price = price - pricePerDay;
                }
                if (days < 1){
                    console.log("Days must be positive number!");
                } else {
                console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                }
                break;
            
        }
        
    }else {
        console.log("Invalid input!")
    }
    

}
newExam(["Borovets",
"noEquipment",
"yes",
"6"])