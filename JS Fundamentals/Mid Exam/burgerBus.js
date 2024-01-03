function burgerBus(arr){

    let citiesCount = arr.shift();
    let totalProfit = 0;

    for(let i = 1 ; i <= citiesCount; i++){
        let currentCity = arr.shift();
        let income = Number(arr.shift());
        let expenses = Number(arr.shift());

        if(i % 3 === 0 && i % 5 !== 0){
            expenses *= 1.50;
        console.log(`In ${currentCity} Burger Bus earned ${(income-expenses).toFixed(2)} leva.`);
        totalProfit += income - expenses;

        continue

        }
        if(i % 5 === 0 ){
            income *= 0.90;
        console.log(`In ${currentCity} Burger Bus earned ${(income-expenses).toFixed(2)} leva.`);
        totalProfit += income - expenses;
        continue

        }
        totalProfit += income - expenses;

        console.log(`In ${currentCity} Burger Bus earned ${(income-expenses).toFixed(2)} leva.`);
        

    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);


}
burgerBus(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"]);
burgerBus(["5", "Lille", "2226.00", "1200.60", "Rennes", "6320.60", "5460.20", "Reims", "600.20", "452.32", "Bordeaux", "6925.30", "2650.40", "Montpellier", "680.50", "290.20"]);
