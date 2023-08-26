function integerAndFloat(firstNumber, secondNumber, thirdNumber){

    let result = firstNumber + secondNumber + thirdNumber;
    let type = "";

    if(result % 1 === 0 ){
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${result} - ${type}`);

}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)