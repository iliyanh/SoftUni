function storeCalculator(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));


    let dict = {}
    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i].split(" : ").join(": ");
        const firstLetter = element[0];

        if (dict[firstLetter] === undefined) {
            dict[firstLetter] = []
        }

        dict[firstLetter].push(element)

    }

    for (const key in dict) {
        console.log(key);
        for (const element of dict[key]) {
            console.log(`  ${element}`);
        }
    }
}

storeCalculator(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);