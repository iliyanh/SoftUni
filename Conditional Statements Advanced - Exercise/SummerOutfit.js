function summerOutfit(input){
    let temperature = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "asd";
    let shoes = "dsb";

    if (temperature >= 10 && temperature <=18){
       switch(timeOfDay){
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }             
    } else if (temperature > 18 && temperature <=24){
        switch(timeOfDay){
            case "Morning":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else if (temperature >= 25){
        switch(timeOfDay){
            case "Morning":
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    }
}
summerOutfit(["28",
"Evening"])


