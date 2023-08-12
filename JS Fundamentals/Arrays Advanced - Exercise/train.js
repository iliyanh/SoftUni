function train(arr) {

    let train = arr.shift().split(" ").map(Number);
    let capacity = arr.shift()




    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let command = commands[0];
        let passengers = commands.splice(1).map(Number);
        
        if (command === "Add") {
            train.push(passengers[0]);
        } else {
            passengers = Number(commands[0]);
            for (let j = 0; j < train.length; j++) {



                if (train[j] + passengers <= capacity) {
                    train[j] += passengers
                    break;
                }
    
            }
        }



    }
    console.log(train.join(" "));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);