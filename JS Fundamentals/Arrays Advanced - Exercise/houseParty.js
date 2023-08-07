function houseParty(arr){
    let list = []
    for(let i = 0; i< arr.length ; i++){
        let commands = arr[i].split(" is ")
        let name = commands[0]
        let command = commands[1];
        if (command === "going!"){
            if(!list.includes(name)){
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(!list.includes(name)){
                console.log(`${name} is not in the list!`);
            } else {
                list.splice(list.indexOf(name),1)
            }
        }
        
        
    
    }
    console.log(list.join("\n"));

}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);