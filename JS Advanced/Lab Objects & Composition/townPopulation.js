function townPopulation(array){

    let output = {};

    for(let line of array){
        let [town, population] = line.split(" <-> ");

        if(!output.hasOwnProperty(town)){
            output[town] = Number(population);
        } else {
            output[town] += Number(population);
        }

    }

    for (const key in output) {
        console.log(`${key} : ${output[key]}`);
    }

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);