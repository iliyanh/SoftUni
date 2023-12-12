function storeProvision(stock, order) {

    obj = {}
    let newArr = []

    for (let i = 0; i < stock.length; i += 2) {
        let stockProduct = stock[i];
        let stockQuantity = Number(stock[i + 1]);

        newArr.push(stockProduct, stockQuantity)

    }
    for (let j = 0; j < order.length; j += 2) {
        let orderProduct = order[j];
        let orderQuantity = Number(order[j + 1]);
        let index = newArr.indexOf(orderProduct);

        if (newArr.includes(orderProduct)) {
            newArr[index + 1] += orderQuantity
        } else {
            newArr.push(orderProduct, orderQuantity)
        }
    }
    for (let k = 0; k < newArr.length; k += 2) {
        let product = newArr[k];
        let quantity = newArr[k + 1];

        obj.product = product;
        obj.quantity = quantity;

        console.log(`${product} -> ${quantity}`);
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
