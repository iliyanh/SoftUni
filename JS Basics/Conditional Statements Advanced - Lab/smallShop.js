function smallShop(input){

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if (town === "Sofia"){
        switch(product){
            case "coffee":
                price = quantity * 0.50;
                console.log(price.toFixed(2));
                break;
            case "water":
                price = quantity * 0.80;
                console.log(price.toFixed(2));
                break;
            case "beer":
                price = quantity * 1.20;
                console.log(price.toFixed(2));
                break;
            case "sweets":
                price = quantity * 1.45;
                console.log(price.toFixed(2));
                break;
            case "peanuts":
                price = quantity * 1.60;
                console.log(price.toFixed(2));
                break;
        }
    } else if (town === "Plovdiv") {
        switch(product){
            case "coffee":
                price = quantity * 0.40;
                console.log(price.toFixed(2));
                break;
            case "water":
                price = quantity * 0.70;
                console.log(price.toFixed(2));
                break;
            case "beer":
                price = quantity * 1.15;
                console.log(price.toFixed(2));
                break;
            case "sweets":
                price = quantity * 1.30;
                console.log(price.toFixed(2));
                break;
            case "peanuts":
                price = quantity * 1.50;
                console.log(price.toFixed(2));
                break;
        }
    } else if ( town === "Varna"){
        switch(product){
            case "coffee":
                price = quantity * 0.45;
                console.log(price.toFixed(2));
                break;
            case "water":
                price = quantity * 0.70;
                console.log(price.toFixed(2));
                break;
            case "beer":
                price = quantity * 1.10;
                console.log(price.toFixed(2));
                break;
            case "sweets":
                price = quantity * 1.35;
                console.log(price.toFixed(2));
                break;
            case "peanuts":
                price = quantity * 1.55;
                console.log(price.toFixed(2));
                break;
        }
    }
}
smallShop(["water",
"Varna",
"3"])



