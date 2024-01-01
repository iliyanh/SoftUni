function serializeString(text){

let obj = {}
let array = text[0].split("")


for(let i = 0; i < array.length; i++){
    
    let currentChar = array[i]

    if(!obj.hasOwnProperty(currentChar)){
        obj[currentChar] = i;
    } else if (obj.hasOwnProperty(currentChar)){
        obj[currentChar] += "/" + i;
    }
}
for(let key in obj){
    console.log(`${key}:${obj[key]}`);
}
;
}
serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);