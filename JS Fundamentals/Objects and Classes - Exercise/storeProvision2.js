function storeProvision(stock, order) {

    obj = {}
  

    for (let i = 0; i < stock.length; i += 2) {
        let stockProduct = stock[i];
        obj[stockProduct] = Number(stock[i + 1]);
    }
    for (let i = 0; i < order.length; i += 2) {
        let stockProduct = order[i];
        
        if(!obj.hasOwnProperty(stockProduct)){
            obj[stockProduct] = 0;
        }
        
        obj[stockProduct] += Number(order[i + 1]);
    }
    

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
        
    }
  

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
    
storeProvision([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]
);
