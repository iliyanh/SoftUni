function manOWar(arr){

let pirateShip = arr.shift().split(">").map(Number);
let warShip = arr.shift().split(">").map(Number);
let maximumHealth = Number(arr.shift());


for(let i = 0; i < arr.length; i++){
    let tokens = arr[i].split(" ");
    let command = tokens[0];
    let elements = tokens.slice(1).map(Number)
    
    
    switch (command){
        case "Fire": fire(warShip, elements[0], elements[1]); break;
        case "Defend": defend(pirateShip, elements[0], elements[1], elements[2]); break;
        case "Repair ": repair(pirateShip, elements[0], elements[1], maximumHealth); break;
        case "Status": status(pirateShip, maximumHealth); break;
        case "Retire": {
            console.log(`Pirate ship status: ${pirateShip.reduce((a,c) => a + c, 0)}`);
            console.log(`Warship status: ${warShip.reduce((a,c) => a + c, 0)}}`);
            break;
        }
    }
    if(isShipDead(warShip)){
        console.log("You won! The enemy ship has sunken.");
    }
    if(isShipDead(pirateShip)){
        console.log("You lost! The pirate ship has sunken.");
    }
    elements = arr.shift().split(" ");
    command = elements.shift();
    elements = Number(elements);
}
function isShipDead(ship){
    let deadSections = ship.filter(x=> x <= 0)
    return deadSections > 0
}

function fire(warShip, index, damage){
    if(index > 0 && index < warShip.length){
        warShip[index] -= damage;
    }
}

function defend(pirateShip, startIndex, endIndex, damage){
    if(startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length){
        for(let i = startIndex; i <= endIndex; i++){
            pirateShip[i] -= damage;

        }
    }
}

function repair(ship, index, heal, maximumHealth){
    if(index > 0 && index < ship.length){
        let misingHealth = maximumHealth - ship[index]
        ship[index] += Math.min(misingHealth, heal)
    }
}

function status(ship, maximumHealth){
    let damagedSections = ship.filter(x=> x <(maximumHealth* 0.2));
    console.log(`"${damagedSections} sections need repair."`);
}




}
manOWar((["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
);
manOWar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
);