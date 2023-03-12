function tradeCommissions(input){
    let town = input[0];
    let quantity = Number(input[1]);
    let commision = 0;

    if (quantity >= 0 && quantity <=500){
        switch (town) {
            case "Sofia":
                commision = quantity * 0.05;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = quantity * 0.045;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = quantity * 0.055;
                console.log(commision.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else if (quantity > 500 && quantity <= 1000){
        switch (town) {
            case "Sofia":
                commision = quantity * 0.07;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = quantity * 0.075;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = quantity * 0.08;
                console.log(commision.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else if (quantity > 1000 && quantity <= 10000){
        switch (town) {
            case "Sofia":
                commision = quantity * 0.08;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = quantity * 0.10;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = quantity * 0.12;
                console.log(commision.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else if (quantity > 10000){
        switch (town) {
            case "Sofia":
                commision = quantity * 0.12;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = quantity * 0.13;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = quantity * 0.145;
                console.log(commision.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else {
        console.log("error");
    }
}
tradeCommissions(["Kaspichan",
"-50"])

