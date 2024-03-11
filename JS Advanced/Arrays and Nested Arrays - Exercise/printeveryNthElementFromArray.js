function printEveryNthElement(array, number) {

    let output = []
    for(let i = 0; i < array.length; i+=number){
        output.push(array[i])
    }
   return output

}
console.log(printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20'], 2));
printEveryNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
);
printEveryNthElement(['1',
    '2',
    '3',
    '4',
    '5'], 6);