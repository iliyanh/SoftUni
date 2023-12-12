function towns(arr) {

    let townInfo = {}


    for (let line of arr) {
        let firstTown = line.split(" | ");
        let town = firstTown[0];
        let latitude = Number(firstTown[1]);
        let longitude = Number(firstTown[2]);

        townInfo.town = town;
        townInfo.latitude = latitude.toFixed(2);
        townInfo.longitude = longitude.toFixed(2);

        console.log(townInfo);
    }


}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
towns(['Plovdiv | 136.45 | 812.575']);