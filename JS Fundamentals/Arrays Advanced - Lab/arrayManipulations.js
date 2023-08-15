function arrayManipulations(arr) {

    let newArr = arr.shift().split(" ").map(Number);




    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let command = commands[0];
        let parameters = commands.splice(1).map(Number);
        newArr = execute(command, parameters, newArr);

    }
    return newArr.join(" ")

    function execute(command, parameters, newArr){

    switch (command) {
        case "Add":
            newArr.push(parameters[0]);
            return newArr;
        case "Remove":
            newArr = newArr.filter(x => x !== parameters[0]); 
            return newArr;

        case "RemoveAt":
            newArr.splice(parameters[0], 1);
            return newArr;
        case "Insert":
            newArr.splice(parameters[1], 0, parameters[0]);
            return newArr;

    }
    return newArr;
}



}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
);

console.log(arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])
);
