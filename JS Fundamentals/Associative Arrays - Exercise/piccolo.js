function piccolo(input){


let result = new Set();

for(let line of input){
    let tokens = line.split(", ")
    let [command, numberPlate] = tokens

    if(command === "IN"){
        result.add(numberPlate)
    } else {
        result.delete(numberPlate)
    }

}

let sorted = Array.from(result).sort((a, b) => a.localeCompare(b))
for(let el of sorted){

    console.log(el);
    if(result.size === 0){
        console.log(`Parking Lot is Empty`)
        break
    }
}

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);
