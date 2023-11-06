function orders(product, quantity){
    let price = 0;
    switch(product){
        case "coffee": price = 1.50; break;
        case "coke":price = 1.40; break;
        case "water":price = 1; break;
        case "snacks":price = 2; break;
    }

    return ((price * quantity).toFixed(2));

}
console.log(orders("water", 5));
console.log(orders("coffee", 2));