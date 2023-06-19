function shopping(input){
    let budget = Number(input[0]);
    let graphicCards = Number(input[1]);
    let proccessors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let priceForGC = graphicCards * 250;
    let proccessorsPrice = priceForGC * 0.35;
    let totalPPrice = proccessors * proccessorsPrice;
    let ramMemoryPrice = priceForGC * 0.10;
    let totalRamPrice = ramMemory * ramMemoryPrice;
    let total = priceForGC + totalPPrice + totalRamPrice;
    if (graphicCards > proccessors) {
        total = total - (total * 0.15);
    }
    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}
shopping(["920.45",
"3",
"1",
"1"])



