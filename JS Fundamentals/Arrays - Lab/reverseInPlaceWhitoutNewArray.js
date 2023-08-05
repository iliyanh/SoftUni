function noNewArray(array){


    for(let i = 0 ; i < array.length / 2; i++){
        let tempArray = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempArray;
    }
    
    console.log(array.join(" "));


}
noNewArray(['a', 'b', 'c', 'd', 'e'])