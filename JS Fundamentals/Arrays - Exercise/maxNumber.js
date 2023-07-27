function maxNumber(array){

    let firstNum = 0;
    let secondNum = 0;
    let newArr = [];

       for(let i = 0; i < array.length; i++){
        firstNum = array[i];
        secondNum = array[i + 1]

        if( firstNum < secondNum){
            newArr.push(secondNum);

        } else if ( firstNum === secondNum){
            newArr.push(secondNum);
        }
        break;
       }

       for(let j = 2; j <= array.length ; j++){
        let firstEl = array[j];
        let secondEl = array[j + 1];
        if (j === array.length - 1){
            secondEl = 0;
        }
        if ( firstEl > secondEl){
            newArr.push(firstEl);
        }
       }

       console.log(newArr.join(" "));

}
//maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
//maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);