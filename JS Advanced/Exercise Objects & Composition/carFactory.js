function carFactory(input) {

    obj = { ...input };

    if (obj.power <= 90) {
        obj["engine"] = {
            power: 90,
            volume: 1800
        }
        delete obj.power
    } else if (obj.power <= 120) {
        obj["engine"] = {
            power: 120,
            volume: 2400
        }
        delete obj.power
    } else if (obj.power <= 200) {
        obj["engine"] = {
            power: 200,
            volume: 3500
        }
        delete obj.power
    }
    if(obj.carriage === "hatchback"){
        obj["carriage"] = {
            type: obj.carriage,
            color: obj.color
        }
        delete obj.color;
    } else if(obj.carriage === "coupe"){
        obj["carriage"] = {
            type: obj.carriage,
            color: obj.color
        }
        delete obj.color;
    }

    if(obj.wheelsize % 2 === 0){
        obj.wheelsize--
    }
    obj["wheels"] = []
    for(let i= 0; i< 4; i++){
        obj["wheels"].push(obj.wheelsize)
    }
    delete obj.wheelsize
    return obj

   
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));