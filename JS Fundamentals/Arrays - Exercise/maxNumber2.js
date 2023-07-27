function maxNumber(array){

    let newArr = [];
    
    for( let i = 0; i < array.length; i++){
    let flag = 0;
    let firstNum = array[i];
    for(let j = i + 1 ; j <= array.length; j++){
        let secondNum = array[j];
        if(firstNum < secondNum){
            break;
        } else if (firstNum > secondNum){
            flag++;
        }
        if(flag >= array.length - 1 - i){
            newArr.push(firstNum);
            flag = 0;
        }
        
    }
}   
console.log(newArr.join(" "));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);