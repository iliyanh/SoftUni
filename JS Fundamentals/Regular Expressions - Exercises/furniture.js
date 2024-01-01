function furniture(data){

    let regex = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/g
    let totalPrice = 0;
    console.log("Bought furniture:");
    while ((result = regex.exec(data)) !== null) {
        
        let product = result.groups.product;
        let price = result.groups.price;
        let quantity = result.groups.quantity;
        let currentPrice = Number(price) * Number(quantity);

        totalPrice += currentPrice
        console.log(product);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
//furniture(['>>Sofa<<312.23!3',
//'>>TV<<300!5',
//'>Invalid<<!5',
//'Purchase']
//);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);
