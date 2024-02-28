function lowestPrice(array){

    let result = {};
    //loop thru array and split and assign town product and price
    for(let line of array){
        const [town, product, price] = line.split(" | ");
        // if there's no object of current product create one and and assign town and value;
        if(!result[product]){
            result[product] = {}
        }
        result[product][town] = Number(price);
    }
    // take the keys of the product and return array 
    for(const [product, towns] of Object.entries(result)){
        //sort  towns by value  (look at the sort function, sort them by [1] a.k.a value ) and then assign them to town and price 
        const sorted = Object.entries(towns).sort((a,b) => a[1] - b[1]);
        const [town, price ] = sorted[0];
        // print
        console.log(`${product} -> ${price} (${town})`);

    }
   
}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);