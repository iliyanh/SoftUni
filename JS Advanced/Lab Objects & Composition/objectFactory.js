function objectFactory(library, orders) {
    let result = [];
    //loop thru orders
    for(let order of orders){
        //take the order and assign order.template to new obj
        let obj = Object.assign({}, order.template);
        // loop thru object.parts (might be more than one)
        for(let methodName of order.parts){
            // take what is in parts and make it as a key 
            // look in library for what is in parts and set it as value
            obj[methodName] = library[methodName];
        }
        //push in to result
        result.push(obj)
    }
    //console.log(result);
    return result

}
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
objectFactory(library, orders);