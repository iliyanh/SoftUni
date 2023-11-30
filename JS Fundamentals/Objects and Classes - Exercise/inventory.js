function inventory(arr){

let secondArray = []
let hero = {};

for(let line of arr){
    let[name, level, items] = line.split(" / ")
     hero = {
        name: name,
        level:  Number(level),
        items:  items

    }
    secondArray.push(hero)
    
}
let  sorted = secondArray.sort((a, b) => a.level - b.level);

for(let output of sorted){
    console.log(`Hero: ${output.name}`);
    console.log(`level => ${output.level}`);
    console.log(`items => ${output.items}`);
}

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );