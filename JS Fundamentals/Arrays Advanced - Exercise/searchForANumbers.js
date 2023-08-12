function searchForANumbers(firstArr, secondArr){

    let elNeeded = secondArr.shift();
    let numbersToDelete = secondArr.shift();
    let numToSearch = secondArr.shift();
    let counter = 0;
    let result = [];
    


    firstArr.splice((elNeeded))


    
    for(let i = 0 ; i < numbersToDelete; i++){
        firstArr.shift()
    }
    
    for(let el of firstArr){
        if(el === numToSearch){
            counter++
        }
    }
    console.log(`Number ${numToSearch} occurs ${counter} times.`);

}
searchForANumbers([5, 2, 3, 4, 1, 6],[5, 2, 3]);
searchForANumbers([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );