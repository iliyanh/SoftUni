function storage(input){

    let newMap = new Map();

    for( let el of input){
        let tokens = el.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if(!newMap.has(product)){
            newMap.set(product, quantity)
        } else {
            let currentQuantity = newMap.get(product)
            let newQuantity = currentQuantity += quantity
            newMap.set(product, newQuantity)
        }
    }

    for(let el of newMap){
        console.log(`${el[0]} -> ${el[1]}`);
    }


}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);