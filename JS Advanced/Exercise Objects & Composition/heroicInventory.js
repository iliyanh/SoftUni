function heroicInventory(array) {
    
    let result = []
    for (const line of array) {
        let obj = {};
        let hero = line.split(" / ");

        obj.name = hero[0];
        obj.level = Number(hero[1]);

        const items = hero[2];
        obj.items = items ? items.split(", ") : [];

        result.push(obj);

        
    }
    return JSON.stringify(result)

}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
/*[{"name":"Isacc","level":25,"items":["Apple","GravityGun"
]},{"name":"Derek","level":12,"items":["BarrelVest","Dest
ructionSword"]},{"name":"Hes","level":1,"items":["Desola
tor","Sentinel","Antara"]}]*/