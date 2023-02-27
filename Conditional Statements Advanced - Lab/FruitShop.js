function fruitShop(input){

    let item = input[0];
    let day = input[1];
    let quantity = input[2];
    let price = 0
    let finalPrice = 0

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(item){
                case "banana": 
                    price = 2.50; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "apple":
                     price = 1.20; 
                     console.log((price * quantity).toFixed(2));
                     break;
                case "orange": 
                    price = 0.85; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapefruit": 
                    price = 1.45; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "kiwi": 
                    price = 2.70;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "pineapple": 
                    price = 5.50;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapes": 
                    price = 3.85;
                    console.log((price * quantity).toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }   
            break;
        case "Saturday":
        case "Sunday":
            switch(item){
                case "banana": 
                    price = 2.70; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "apple":
                     price = 1.25; 
                     console.log((price * quantity).toFixed(2));
                     break;
                case "orange": 
                    price = 0.90; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapefruit": 
                    price = 1.60; 
                    console.log((price * quantity).toFixed(2));
                    break;
                case "kiwi": 
                    price = 3.00;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "pineapple": 
                    price = 5.60;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapes": 
                    price = 4.20;
                    console.log((price * quantity).toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }   
            break;
        default:
            console.log("error");
            break;
            
    }

}
fruitShop(["tomato",
"Monday",
"0.5"])




